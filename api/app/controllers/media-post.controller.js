const media = require("../models/media-post.model.js");

exports.findAll = (req, res) => {
  let searchQuery = req.query.search;
  let response = [];
  var cursor = media
    .find(
      { "content-items.content.name": { $regex: searchQuery, $options: "i" } },
      { _id: 0 }
    )
    .select(["content-items.content"])
    .cursor();

  cursor.on("data", function(doc) {
    doc["content-items"].content.forEach(mediaData => {
      if (mediaData.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        response.push(mediaData);
      }
    });
  });

  cursor.on("close", function() {
    res.send(response);
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
