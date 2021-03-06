const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const port = 8080;
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

require('./config/mongoose.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
