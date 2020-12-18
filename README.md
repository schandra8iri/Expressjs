# Expressjs

## Prerequisit

- Javascript Fundamentals
- Nodejs and npm
- Http request and json

## CH01

Create package.json

    npm init -y

Install express

    npm i express

Create the main file / entry point - index.js

Create the express server by adding below line to index.js

    const express = require("express");

    const app = express();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

To start the server

    node index //name of the file

Add request mapping / routes using get, post etc and a response to each request

    app.get("/", (req, res) => {res.send('Home page');});

    app.get("/about", (req, res) => {res.send("About Page");});

    app.get("/api/team/digital", (req, res) => {res.json([{ eid: 2313, name: "sandeep" },{ eid: 2314, name: "john" },]);});

https://expressjs.com/en/starter/basic-routing.html

Install nodemon to auto restart server

    npm i -D nodemon

Update Scripts in package.json with below line

        "start": "node index",
        "dev": "nodemon index"

Run server as dev

        npm run dev

Use static files

add below line to define root dir for static file

    app.use(express.static(path.join(__dirname, "public")));

Create a folder called public, and add an html page in public.
This page can be access with out any additional codeing

Create a middleware to log every request details
write a function with req, res and next as params

    const logger = (req, res, next) => {
    console.log(`${req.originalUrl}`);
    next();};

Use middleware function in the express

    app.use(logger)

## CH02

move middleware to seperate folder

create a folder called middleware and file called logger.js

add the logger function and export

import the logger in index.js

Use Express routes

Create a folder routes, create a file commonroutes.js
const express = require("express");
const router = express.Router();

Move all routes from index.js the above file, change app to router

Export router module

    module.exports = router;

import router in index.js

    const router = require("./routes/commonroutes");

and use it

    app.use("/", router);
