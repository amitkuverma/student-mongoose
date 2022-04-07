const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')

// const url =
//   "mongodb+srv://test:test1234@cluster0.lnabw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const url = "mongodb://localhost:27017/";

mongoose
  .connect(url, {
    dbName: "event_db",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection stablise succssesfuly ..."))
  .catch((err) => console.error(err));

const index = require("./routes/index");
const user = require("./routes/user");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use("/", index);
app.use("/user", user);

// catch 404 and forword to error handler

app.use(function (req, res, next) {
  var err = new Error("Not found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
