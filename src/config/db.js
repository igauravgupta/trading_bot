import mongoose from "mongoose";

// connecting database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
