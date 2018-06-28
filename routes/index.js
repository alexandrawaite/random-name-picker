const express = require('express');
const routes = express.Router();
const members = require('../models/names');

// routes.get('/', (req, res) => {
   
// });

routes.post('/add', (req, res) => {
    members.create({
        name: req.body.name
    }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
});

routes.delete('/remove', (req, res) => {
    members.remove({ 
        name: req.body.name
    }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
});

module.exports = routes;
