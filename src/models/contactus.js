// src/models/contactus.js

const mongoose = require('mongoose');

const contactusSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, unique: true },
    treatment: { type: String, required: true },
    bodyZone: { type: String, required: true },
    location: { type: String, required: true }
});


const UserDetailsLanding = mongoose.model("UserDetailsLanding", contactusSchema)

module.exports = UserDetailsLanding;     