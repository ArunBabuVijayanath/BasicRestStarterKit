const MediaPost = require("../models/media-post.model.js");

// Create and Save a new Note
exports.create = (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }

  // Create a Note
  const MediaPost = new MediaPost({
    title: req.body.title,
    content: req.body.content
  });

  // Save Note in the database
  MediaPost.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note."
      });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
  MediaPost.find()
    .then(MediaPosts => {
      res.send(MediaPosts);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes."
      });
    });
};
const page_1_data = {
  page: {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "1",
    "page-size-requested": "20",
    "page-size-returned": "20",
    "content-items": {
      content: [
        {
          name: "The Birds",
          "poster-image": "poster1.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster2.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster3.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster2.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster1.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster3.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster3.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster2.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster1.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster1.jpg"
        }
      ]
    }
  }
};

const page_2_data = {
  page: {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "2",
    "page-size-requested": "20",
    "page-size-returned": "20",
    "content-items": {
      content: [
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster6.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster5.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster4.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster6.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster6.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster5.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster4.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster4.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster6.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster5.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster4.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster6.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster6.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster5.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster4.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster4.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster5.jpg"
        }
      ]
    }
  }
};

const page_3_data = {
  page: {
    title: "Romantic Comedy",
    "total-content-items": "54",
    "page-num-requested": "3",
    "page-size-requested": "20",
    "page-size-returned": "14",
    "content-items": {
      content: [
        {
          name: "Family Pot",
          "poster-image": "poster9.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster8.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster7.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster9.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster9.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster8.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster7.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster9.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "poster8.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster7.jpg"
        },
        {
          name: "The Birds with an Extra Long Title",
          "poster-image": "poster9.jpg"
        },
        {
          name: "Rear Window",
          "poster-image": "poster9.jpg"
        },
        {
          name: "The Birds",
          "poster-image": "poster8.jpg"
        },
        {
          name: "Family Pot",
          "poster-image": "posterthatismissing.jpg"
        }
      ]
    }
  }
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
  const requestPageNumber = parseInt(req.params.pageNumber);
  switch (requestPageNumber) {
    case 1:
      res.send(page_1_data);
      break;
    case 2:
      res.send(page_2_data);
      break;
    case 3:
      res.send(page_3_data);
      break;
    default:
      res.send({});
      break;
  }
};
