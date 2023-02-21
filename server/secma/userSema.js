// In this code imort mongoose and the create userScema function from  db.js then make modle of the userSchema and export it.
const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    name: String,
    email: String,
})

const user = mongoose.model('User', userScema);

module.exports = user;

