// src/models/contactus.js

import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const contactusSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    phone: { type: Number, required: [true, "Phone number is required"], unique: true },
    email: { type: String, required: [true, "Email is required"], unique: true },
    treatment: { type: String, required: true },
    bodyZone: { type: String, required: true },
    location: { type: String, required: true }
});


export const UserDetailsLanding = mongoose.model("UserDetailsLanding", contactusSchema);
  