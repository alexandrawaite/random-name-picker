const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const memberSchema = new Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Members', memberSchema);