require('dotenv').config();

const mongoURL = process.env.MONGOURL;

module.exports = mongoURL;