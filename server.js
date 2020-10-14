const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  connection.query("SELECT * FROM todos", (err, todoData) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.render("index", { todos: todoData });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
