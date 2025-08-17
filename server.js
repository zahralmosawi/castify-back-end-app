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

const connectToDB = require('./config/db');

const PORT = process.env.PORT || 3000;

connectToDB();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/users', userRoutes);
app.use('/', podcastRoutes);
app.use('/boards', boardRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});