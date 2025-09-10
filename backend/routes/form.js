const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

// Save form data
router.post('/submit', async (req, res) => {
  try {
    const form = new FormData(req.body);
    await form.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all form data
router.get('/all', async (req, res) => {
  try {
    const forms = await FormData.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
