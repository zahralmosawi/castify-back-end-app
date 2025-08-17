const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const logger = require('morgan');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const podcastRoutes = require('./routes/podcast.routes');
const boardRoutes = require('./routes/board.routes');
const authRoutes = require('./routes/auth.routes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB');
});

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json());
app.use(logger('dev'));

app.use('/users', userRoutes);
app.use('/', podcastRoutes);
app.use('/boards', boardRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});