const express = require("express");
const app = express();
const port = 5000;
const host = "127.0.0.1";

app.get("/", (req, res) => {
  //   res.send("hello express");
  res.render("home.ejs");
});

const user = {
  id: 1,
  name: "abhay",
  skill: "express js",
  email: "a@gmail.com"
};

app.get("/about", (req, res) => {
  const obj = { data: user };

  res.render("about.ejs", obj);
});

app.listen(port, () => {
  console.log(`app listen on ${port} `);
});
