const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  year: { type: Number },
  genre: { type: String },
  isTrending: { type: Boolean, default: false },
  image: { type: String },
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema); 