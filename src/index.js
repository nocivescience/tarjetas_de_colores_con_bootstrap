const express = require("express");
const app = express();
const path=require("path");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const {mongoose} = require("./database");
const session = require("express-session");
const methodOverride = require("method-override");
const mongoStore = require("connect-mongo");
//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
    "hbs",
    exphbs({
        extname: "hbs",
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials")
    })
);
app.set("view engine", "hbs");
//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "views")));
//public routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/notes.routes"));

//listen
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});