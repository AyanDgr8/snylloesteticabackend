// src/models/bookform.js

import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const bookformSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"] 
    },
    phone: { 
        type: Number, 
        required: [true, "Phone number is required"], 
        unique: true,
        match: /^[0-9]{10}$/ 
    },
    email: { 
        type: String, 
        required: [true, "Email is required"], 
        unique: true,
        match:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    },
    bodyZone: { 
        type: String, 
        required: true 
    },
});


const UserDetailsBookform  = mongoose.model("UserDetailsBookform", bookformSchema);

export  { UserDetailsBookform };


