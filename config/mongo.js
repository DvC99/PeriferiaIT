import { connect } from "mongoose";

const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        await connect(DB_URI, options);
        console.log('Connected to the database');
        // Your further code logic here
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
};

export default dbConnect;
