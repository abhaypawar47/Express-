// // const express = require("express");
// // const app = express();
// // const port = 3000;

// // app.use(express.static("public/"));
// // app.use(express.urlencoded({ extended: true }));

// // var url = require("url");

// // app.get("/", (req, res) => {
// //   res.render("home.ejs");
// // });

// // app.get("/saveform", (req, res) => {
// //   var urldata = url.parse(req.url, true);
// //   res.send(urldata.query);
// //   //console.log(urldata.query);
// // });

// // app.post("/saveform", (req, res) => {
// //   res.send("<h1>data is send successfully post method</h1>");
// //   console.log(req.body);
// // });

// // app.get("/about", (req, res) => {
// //   res.render("about.ejs");
// // });

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`);
// // });

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("home.ejs");
// });

// // GET method for form submission
// app.get("/saveform", (req, res) => {
//   res.send(req.query); // cleaner than using url.parse
// });

// // POST method for form submission
// app.post("/saveform", (req, res) => {
//   console.log(req.body); // form data from POST
//   res.send("<h1>Data is sent successfully using POST method</h1>");
// });

// app.get("/about", (req, res) => {
//   res.render("about.ejs");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

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
