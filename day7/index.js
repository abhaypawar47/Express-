const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home"); 


app.get("/saveform", (req, res) => {
  const { username, userid, password, skill } = req.query;
  res.render("saveform", {
    username,
    userid,
    password,
    skill,
    methodUsed: "GET"
  });
});


app.post("/saveform", (req, res) => {
  const { username, userid, password, skill } = req.body;
  res.render("saveform", {
    username,
    userid,
    password,
    skill,
    methodUsed: "post"
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
