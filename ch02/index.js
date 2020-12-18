const express = require("express"); // importing express module

const path = require("path");

const app = express(); // init express server

const logger = require("./middleware/logger");

const router = require("./routes/commonroutes");

const teamsrouter = require("./routes/api/teams");

app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/team", teamsrouter);
app.use("/", router);

const PORT = process.env.PORT || 5000; // fetch port number from env variable or use default

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // server to listen on port
