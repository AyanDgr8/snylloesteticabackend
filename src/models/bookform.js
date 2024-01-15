// src/models/bookform.js

const mongoose = require('mongoose');

const bookformSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, unique: true },
    bodyZone: { type: String, required: true },
});


const UserDetailsBookform  = mongoose.model("UserDetailsBookform", bookformSchema)

module.exports = UserDetailsBookform;     