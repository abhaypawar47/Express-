const express = require("express");
const app = express();
const port = 8000;

// middleware

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  const user = [
    {
      id: 1,
      user: "user 1",
      umail: "a@gmail.com"
    },
    {
      id: 2,
      user: "user 2",
      umail: "b@gmail.com"
    },

    {
      id: 3,
      user: "user 3",
      umail: "c@gmail.com"
    }
  ];

  const obj = { data: user };
  res.render("about.ejs", obj);
});

app.use((req, res) => {
  res.send("<h1>error 404 page not found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
