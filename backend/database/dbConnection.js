import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    console.log('Connecting to MongoDB with URI:', process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'reservationSystem', // optional: set your DB name here
    });

    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
};
