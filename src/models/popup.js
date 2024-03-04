// src/models/popup.js

import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const popupSchema = new mongoose.Schema({
    phone: { 
        type: Number, 
        required: [true, "Fill in your phone number"], 
        unique: true,
        match: /^[0-9]{10}$/ 

    },
    bodyZone: { 
        type: String, 
        required: true 
    }
});


const UserDetailsPopup = mongoose.model("UserDetailsPopup", popupSchema);     

export { UserDetailsPopup };