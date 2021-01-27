const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const db = require("./models");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Test routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
