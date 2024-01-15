// src/routes/router.js

const express = require('express');
const router = express.Router();

const UserDetailsBookform = require('../models/bookform');
const UserDetailsLanding = require('../models/contactus');
const UserDetailsPopup = require('../models/popup');


// Endpoint for user details from bookform
router.post('/user-details-bookform', async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const user = new UserDetailsBookform(req.body);
        const savedUser = await user.save();
        console.log('User details saved successfully:', savedUser);
        res.json(savedUser);
    } catch (error) {
        console.error('Error saving user details:', error);
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for user details from contactus form
router.post('/user-details-contactus', async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const user = new UserDetailsLanding(req.body);
        const savedUser = await user.save();
        console.log('User details saved successfully:', savedUser);
        res.json(savedUser);
    } catch (error) {
        console.error('Error saving user details:', error);
        res.status(500).json({ error: error.message });
    }
});

// Endpoint for user details from popup
router.post('/user-details-popup', async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const user = new UserDetailsPopup(req.body);
        const savedUser = await user.save();
        console.log('User details saved successfully:', savedUser);
        res.json(savedUser);
    } catch (error) {
        console.error('Error saving user details:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;