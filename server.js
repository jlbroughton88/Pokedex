const express = require("express");
const path = require("path");
const app = express();

// app.get("/server", (req, res) => {
//     res.send("Hello from server")
// })

// app.use(express.static(path.join(__dirname, "/client/build")))

// app.use("/", require("./routes.js"))

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build/index.html"))
    })
  } else {
    app.use(express.static(path.join(__dirname, "/client/public")));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/public/index.html"))
    })
  }
  

app.listen(process.env.PORT || 5003, () => {
    console.log("App listening on port 5003")
})
