const Movie = require('../models/Movie');

// GET /api/movies/trending
exports.getTrendingMovies = async (req, res) => {
  try {
    const trendingMovies = await Movie.find({ isTrending: true });
    res.json(trendingMovies);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}; 