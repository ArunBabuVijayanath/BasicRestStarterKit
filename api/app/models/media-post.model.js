const mongoose = require("mongoose");

const MediaPostScheme = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  title: String,
  "total-content-items": String,
  "page-num-requested": String,
  "page-size-requested": String,
  "page-size-returned": String,
  "content-items": {
    content: [
      {
        name: String,
        "poster-image": String
      }
    ]
  }
});

module.exports = mongoose.model("media", MediaPostScheme);
