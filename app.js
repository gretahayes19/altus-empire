const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require('./routes/api/users')
const dispensaries = require('./routes/api/dispensary')

const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("frontend/build"));
//     app.get("/", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//     });
// }

mongoose
    .connect(db, { userNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users)
app.use("/api/map", dispensaries)

app.get("/", (req, res) => res.send("Hello World"));
app.listen(port, () => console.log(`Server is running on port ${port}`));