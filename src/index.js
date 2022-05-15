const express = require("express");
const app = express();
const path=require("path");
const morgan = require("morgan");
const {engine} = require("express-handlebars");
//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
    "hbs",
    engine({
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
//routes

//public routes

//listen
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
