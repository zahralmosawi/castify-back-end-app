const mongoose = require('mongoose');

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log('Connection error', error);
    }
}

module.exports = connectToDB;