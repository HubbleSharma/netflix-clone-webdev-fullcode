require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const movieRoutes = require('./routes/movieRoutes');
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('Netflix Clone Backend API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 