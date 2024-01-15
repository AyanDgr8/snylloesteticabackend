// src/models/popup.js

const mongoose = require('mongoose');

const popupSchema = mongoose.Schema({
    phone: { type: Number, required: true },
    bodyZone: { type: String, required: true }
});


const UserDetailsPopup = mongoose.model("UserDetailsPopup", popupSchema)

module.exports = UserDetailsPopup;     