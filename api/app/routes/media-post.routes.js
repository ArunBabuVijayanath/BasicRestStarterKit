module.exports = app => {
  const posts = require("../controllers/media-post.controller.js");
  app.get("/posts/:pageNumber", posts.findOne);
};
