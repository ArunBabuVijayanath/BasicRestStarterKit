const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true });
let conn = mongoose.connection;

conn.on("error", console.error.bind(console, "connection error:"));

conn.once("open", function() {
  app.get("/", (req, res) => {
    res.json({
      message:
        "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."
    });
  });
  require("./app/routes/media-post.routes.js")(app);
  app.listen(5000, () => {
    console.log("Server is listening on port 5000");
  });
});

// // Connecting to the database
// mongoose
//   .connect(dbConfig.url, { useNewUrlParser: true })
//   .then(() => {
//     console.log("Successfully connected to the database");
//   })
//   .catch(err => {
//     console.log("Could not connect to the database. Exiting now...", err);
//     process.exit();
//   });
