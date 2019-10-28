const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genkSchema = new Schema({
    title: String,
    url: {type: String, required: true},
    postedTime: {type: String, required: true}
});

module.exports = mongoose.model('restDB', genkSchema);