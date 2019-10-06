const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from server")
})

app.use(express.static(path.join(__dirname, "/client/build")))

app.use("/", require("./routes.js"))

app.listen(process.env.PORT || 5003, () => {
    console.log("App listening on port 5003")
})
