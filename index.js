const express = require("express");

const app = express();
const novelcovid = require("novelcovid");
const handlebars = require("express-handlebars");
novelcovid.all().then((response) => {
  console.log(response);
});

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars({
    defaultView: "home",
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.get("/", function (req, res) {
  novelcovid.countries().then((response) => {
    res.render("home", { info: response });
  });
});

app.listen(3000, () => {
  console.log("server started at port 3000");
});
