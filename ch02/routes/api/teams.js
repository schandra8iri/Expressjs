const express = require("express");
const teamsrouter = express.Router();

teamsrouter.get("/digital", (req, res) => {
  res.json([
    { eid: 2313, name: "sandeep" },
    { eid: 2314, name: "john" },
  ]);
});

module.exports = teamsrouter;
