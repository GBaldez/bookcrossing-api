const mongoose = require("mongoose");
const Book = require("../models/CBmodel");

module.exports = (req, res, next) => {
    const { name } = req.body;
    if (!name) 
        return res.status(422).send({error: `The field name hasn't value.`});
        next();
};
