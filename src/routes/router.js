// src/routes/router.js

import { Router } from 'express';
import { UserDetailsBookform } from '../models/bookform.js';
import { UserDetailsLanding } from '../models/contactus.js';
import { UserDetailsPopup }  from '../models/popup.js';
// import { validateInput } from '../middlewares/validationMiddleware.js';


const router = Router();

// Common function to handle saving user details
const saveUserDetails = async (req, res, UserDetailsModel) => {
    try {
      const user = new UserDetailsModel(req.body);
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      console.error('Error saving user details:', error);
      res.status(500).json({ error: error.message });
    }
  };


// Endpoint for user details from bookform
router.post('/user-details-bookform', async (req, res) => {
  await saveUserDetails(req, res, UserDetailsBookform);
});

// Endpoint for user details from contactus form
router.post('/user-details-contactus', async (req, res) => {
    await saveUserDetails(req, res, UserDetailsLanding);
  });

// Endpoint for user details from popup
router.post('/user-details-popup', async (req, res) => {
    await saveUserDetails(req, res, UserDetailsPopup);
  });

export default router;







