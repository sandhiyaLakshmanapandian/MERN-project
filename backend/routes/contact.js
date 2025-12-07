const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save to database
    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been submitted successfully.',
      data: {
        name: newContact.name,
        email: newContact.email
      }
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }

  
});

 module.exports = router;

