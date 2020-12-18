const express = require("express");
const teamsrouter = express.Router();
const teamsjson = require("../../controllers/teamspage");

teamsrouter.get("/digital", teamsjson);

module.exports = teamsrouter;
