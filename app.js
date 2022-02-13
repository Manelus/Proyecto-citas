var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

//Inport Routing
var MascotasRouter = require("./routes/Mascotas");
var UsersRouter = require("./routes/Users");


require('dotenv').config();

console.log(process.env.PORT)

connect();

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//Load Routing 
app.use("/", indexRouter);
app.use("/users", Users);
app.use("/mascotas", Mascotas);
app.use("/citas", Citas);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render("error");
  res.json({error: "error"});
});

function listen() {
  //if (app.get('env') === 'test') return;
  //app.listen(port);
  //console.log('Express app started on port ' + port);
}

function connect() {
  try {
    mongoose.connection
      .on("error", console.log)
      .on("disconnected", connect)
      .once("open", listen);
    var connection = require('./config/mongoose');
    return connection;
  } catch (e) {
    console.log(e.message);
  }
}


module.exports = app;