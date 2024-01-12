const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await mongoose.connect(DB_URI, options);
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
};

module.exports = dbConnect;
