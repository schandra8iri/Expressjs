const express = require("express"); // importing express module

const path = require("path");

const app = express(); // init express server

const logger = (req, res, next) => {
  //console.log(req);
  console.log(`${req.originalUrl}`);
  next();
};

app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("<h1>Home Page<h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page<h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1> Contact Page<h1>");
});

app.get("/api/team/digital", (req, res) => {
  res.json([
    { eid: 2313, name: "sandeep" },
    { eid: 2314, name: "john" },
  ]);
});

const PORT = process.env.PORT || 5000; // fetch port number from env variable or use default

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // server to listen on port
