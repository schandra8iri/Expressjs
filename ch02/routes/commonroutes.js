const express = require("express");
const router = express.Router();
const aboutPage = require("../controllers/getAboutPage");
const homePage = require("../controllers/getHomePage");
const contactPage = require("../controllers/getContactPage");
router.get("/", homePage);

router.get("/about", aboutPage);

router.get("/contact", contactPage);

module.exports = router;
