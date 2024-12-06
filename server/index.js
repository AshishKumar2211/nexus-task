const express = require("express");
const mongoose = require('mongoose');

const uri = process.env.DB_URI;
const port = process.env.PORT || 3000;
const app = express();

app.post('/submit', async (req, res) => {
    await Event.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        date: req.body.date
    });
    res.status(200).json({
        status: 'success',
        message: "Response Registerend"
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})