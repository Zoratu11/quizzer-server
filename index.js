const express = require("express")

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello, world!");
});

app.listen(PORT, () => {
    console.log("example app lsitening on port " + PORT);
});