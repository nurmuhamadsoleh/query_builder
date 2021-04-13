//Import Package ke dalam aplikasi kita server.js
const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const path = require("path");
const app = express();

//Import Controller
const home = require("./controllers/homeControllers");

//Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Setup view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.engine(
  "html", hbs({
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/components"),
    defaultLayout: "main_layout.html",
    extname: "html",
  }));
//Routing
app.use("/", home);
//Listener untuk jalankan server
app.listen(3000, () => {
    console.log("listen port 3000");
});