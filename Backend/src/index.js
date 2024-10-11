const express = require("express");
const autopilotRouter = require("./routes/autopilotRoutes");
const prepareDB = require("./database/createTables");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/autopilots", autopilotRouter);

app.listen(PORT, () => {
    prepareDB.createTables();
    console.log(`API is listening on port ${PORT}`);
});