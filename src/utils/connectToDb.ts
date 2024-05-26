import mongoose from 'mongoose';

async function connectToDb() {
  const dbUri = process.env.MONGO_URL as string;
  try {
    await mongoose.connect(dbUri);
    console.log('Connected to DB');
  } catch (error) {
    process.exit(1);
  }
}

export default connectToDb;
