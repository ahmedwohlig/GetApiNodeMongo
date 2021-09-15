const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3002;

mongoose.connect(
    "Http://localhost:12707/MyDB",
    { useNewUrlParser: true, useCreateIndex: true },
    (err) => {
        if (err) {
            console.log("MongoDB Connection Succeeded");
        } else {
            console.log("err in DB connection: " + err);
        }
    }
);

const Country = require("./src/models/Country");

app.get("/Country", async (req, res) => {
    try {
        const getcity = await Country.find();
        res.send(getcity);
    } catch (e) {
        res.send(e);
    }
});

app.post("/city/add", async (req, res) => {
    try {
        console.log("body: ", req.body);
        const found = await Country.findOne(req.body);
        console.log(found);
        if (found)
            return res.status(400).json({
                status: 400,
                messsage: "Bad Request",
                error: "This city already exists",
            });
        const newCity = new Country(req.body);
        console.log(newCity);
        newCity
            .save()
            .then(
                res
                    .status(201)
                    .json({ status: 201, message: " city added succcessfully" })
            );
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
});
