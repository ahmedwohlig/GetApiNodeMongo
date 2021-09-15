const express = require('express');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

require('./src/db/conn');

const Country = require('./src/models/Country');

app.get('/Country', async (req, res) => {
    try {
        const getcity = await Country.find();
        res.send(getcity);
    } catch (e) {
        res.send(e);
    }
});



/*
app.post('/city/add', async (req, res) => {
    const found = await City.find(req.body);
    if (found)
        return res.status(400).json({
            status: 400,
            messsage: 'Bad Request',
            error: 'This city already exists',
        });
    const newCity = new City(req.body);
    newCity
        .save()
        .then(
            res
                .status(201)
                .json({ status: 201, message: ' city added succcessfully' })
        );
});

*/

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
});
