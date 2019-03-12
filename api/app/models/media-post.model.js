const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MediaPostScheme = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Post Title"
    },
    content: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("MediaPost", MediaPostScheme);
