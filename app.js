require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000

////////////// Running server //////////////
// app.listen(PORT, () => console.log("server is running on port 3000"));


////////////// MongoDB connection //////////////
// mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("Connected to the Database.");
//     })
//     .catch(err => {
//         console.log(err);
//     });

// for cyclic.sh hosting
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
// 

// mongoose schema
const newsletterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
});
// mongoose model
const User = mongoose.model("User", newsletterSchema);


////////////// Routes and https methods //////////////
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.route("/users")
    .get(function (req, res) {
        User.find(function (err, data) {
            if (!err) {
                res.send(data)
            } else {
                res.send(err)
            }
        })
    })

    .post(function (req, res) {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        user.save(function (err) {
            if (!err) {
                res.send({ status: 1 });
            } else {
                res.send(err);
            }
        })
    })

    .delete(function (req, res) {
        User.deleteMany(function (err) {
            if (!err) {
                res.send({ status: 1 });
            } else {
                res.send(err);
            }
        })
    });


app.route("/users/:email")
    .get(function (req, res) {
        User.find(req.params, function (err, data) {
            if (!err) {
                res.send(data);
            } else {
                res.send(err);
            }
        })
    })

    .put(function (req, res) {
        User.updateOne(req.params, { $set: req.body }, { overwrite: true }, function (err) {
            if (!err) {
                res.send({ status: 1 });
            } else {
                res.send(err);
            }
        })
    })

    .patch(function (req, res) {
        User.updateOne(req.params, { $set: req.body }, function (err) {
            if (!err) {
                res.send({ status: 1 });
            } else {
                res.send(err);
            }
        })
    })

    .delete(function (req, res) {
        User.deleteMany(req.params, function (err) {
            if (!err) {
                res.send({ status: 1 });
            } else {
                res.send(err);
            }
        })
    });