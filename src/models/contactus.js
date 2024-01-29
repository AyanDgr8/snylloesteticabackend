// src/models/contactus.js

import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    phone: { 
        type: Number, 
        required: [true, "Phone number is required"], 
        unique: true, 
        match: /^[0-9]{10}$/, 
    },
    email: { 
        type: String, 
        required: [true, "Email is required"], 
        unique: true,
        match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ 
    },
    gender: { type: String, required: true, default: 'Not Specified' },
    bodyZone: { type: String, required: true },
    location: { type: String, required: true }
});


const UserDetailsLanding = mongoose.model("UserDetailsLanding", contactusSchema);
  

export { UserDetailsLanding };