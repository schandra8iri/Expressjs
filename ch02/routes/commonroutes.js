const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Home Page<h1>");
});

router.get("/about", (req, res) => {
  res.send("<h1>About Page<h1>");
});

router.get("/contact", (req, res) => {
  res.send("<h1> Contact Page<h1>");
});

router.get("/api/team/digital", (req, res) => {
  res.json([
    { eid: 2313, name: "sandeep" },
    { eid: 2314, name: "john" },
  ]);
});

module.exports = router;
