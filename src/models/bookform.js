// src/models/bookform.js

import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const bookformSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    phone: { type: Number, required: [true, "Phone number is required"], unique: true },
    email: { type: String, required: [true, "Email is required"], unique: true },
    bodyZone: { type: String, required: true },
});


export const UserDetailsBookform  = mongoose.model("UserDetailsBookform", bookformSchema);
