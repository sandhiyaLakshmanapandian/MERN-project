const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/memoryapp';
console.log('Connecting to MongoDB URI:', MONGODB_URI);

mongoose.connect(MONGODB_URI)
.then(() => console.log('MongoDB Connected Successfully'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Memory Enhancement App API' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
