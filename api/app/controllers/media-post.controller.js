const media = require("../models/media-post.model.js");

exports.findAll = (req, res) => {
  let searchQuery = req.query.search;
  media
    .aggregate([
      {
        $match: {
          "content-items.content.name": { $regex: searchQuery, $options: "i" }
        }
      },
      {
        $unwind: "$content-items.content"
      },
      {
        $match: {
          "content-items.content.name": { $regex: searchQuery, $options: "i" }
        }
      },
      {
        $replaceRoot: {
          newRoot: "$content-items.content"
        }
      }
    ])
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Obj id err " + pageNumber
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id " + pageNumber
      });
    });
};

exports.findOne = (req, res) => {
  let pageNumber = req.params.pageNumber;
  media
    .find({ "page-num-requested": pageNumber }, { _id: 0 })
    .then(post => {
      if (!post) {
        return res.status(404).send([]);
      }
      const responseObject = {};
      responseObject.page = post && post[0];
      res.send(responseObject);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Obj id err " + pageNumber
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id " + pageNumber
      });
    });
};
