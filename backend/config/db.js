import mongoose from 'mongoose';
import dotenv from 'dotenv'
// dotenv.config()

const connectDb = async () => {
  try {
    const connection =  await mongoose.connect('mongodb+srv://baladywebsite:kHmU7sUTIDK6RZfU@cluster0.hntntu8.mongodb.net/balady-database?retryWrites=true&w=majority')
    console.log(`MongoDB connected successfully: ${connection.connection.host}`);
  } catch (error) {
    console.log('hiiu')
    console.error('MongoDB connection error:', error.message);
  }
};

export default connectDb;