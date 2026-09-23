require('dotenv').config();
const mongoose = require('mongoose');


async function connectDB() {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to MongoDB");
}

module.exports = connectDB;