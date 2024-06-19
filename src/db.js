import mongoose from "mongoose";

async function connectDB() {
  try {
    mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/ecommerceDB"
    );
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
