const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require('./routes/api/users')
const dispensaries = require('./routes/api/dispensary')
const ratings = require('./routes/api/rating')
const photos = require('./routes/api/photo')

const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
}

mongoose
    .connect(db, { userNewUrlParser: true, useUnifiedTopology: true })
    // .then(() => console.log("Connected to MongoDB successfully"))
    // .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/map", dispensaries)
app.use("/api/ratings", ratings)
// app.use("/api/photos", photos)

app.use(passport.initialize());
require('./config/passport')(passport);

app.listen(port, () => console.log(`Server is running on port ${port}`));

