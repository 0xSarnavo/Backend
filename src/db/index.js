import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const mongodbConnection = async () => {
  try {
    const connectionInterface = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`,
    );
    console.log('Connected to MongoDB: ', connectionInterface.connection.host);
  } catch (error) {
    console.error('MongoDB Connection Error: ', error);
    process.exit(1);
  }
};

export default mongodbConnection;
