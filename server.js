const express = require("express");
const fetch = require("node-fetch")
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from server")
})

app.use("/", require("./routes.js"))

app.listen(process.env.PORT || "5003", () => {
    console.log("App listening on port 5003")
})
