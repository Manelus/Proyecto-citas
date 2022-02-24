var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

//Inport Routing
// var MascotasRouter = require("./routes/Mascotas");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/usuarios");
var mascotasRouter = require("./routes/mascotas");
var citasRouter = require("./routes/citas");
var veterinarioRouter = require("./routes/veterinarios");

console.log(process.env.PORT)

//connect();

var app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors"); 

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({origin: '*'}));
//Load Routing 
app.use("/", indexRouter);
app.use("/usuarios", usersRouter);
app.use("/mascotas", mascotasRouter);
app.use("/citas", citasRouter);
app.use("/veterinarios", veterinarioRouter);

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

app.listen(PORT, () => { console.log(`App corriendo en el puerto: ${PORT}`)})

module.exports = app;
