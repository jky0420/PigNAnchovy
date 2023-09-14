import mongoose from 'mongoose';

const connectDB = async () => {
  console.log('dburi', process.env.DB_URI);
  try {
    const db = await mongoose.connect(process.env.DB_URI as string, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (err: any) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
