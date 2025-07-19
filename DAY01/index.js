const express = require("express");
const app = express();
const port = 9000;

const menu = `
<a href ='/'>home</a>
<a href ='/about'>ABOUT THE PAGE </a>
<a href ='/contact'>CONTACT US</a>`;

app.get("/", (req, res) => {
  res.send(menu + "<h1>HOME PAGE</h1>");
});

app.get("/about", (req, res) => {
  res.send(menu + "<h1>about page </h1>");
});

app.get("/contact", (req, res) => {
  res.send(menu + "<h1>contact page</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
