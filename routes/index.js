const express = require('express');
const routes = express.Router();
const members = require('../models/names');

routes.get('/', (req, res) => {
  members.find({}, (err,members) => {
    if (err) {
      console.log('you stupid')
    } else {
      res.render('landing', {members: members});
    }
  })
});



routes.post('/add', (req, res) => {
    members.create({
        name: req.body.name
    }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.redirect('/')
        }
    });
});

routes.post('/remove', (req, res) => {
    members.remove({
        name: req.body.name
    }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.redirect('/')
        }
    });
});

module.exports = routes;
