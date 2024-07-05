import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

async function connectDB() {
  try {
    mongoose.connect(MONGODB_URI || "mongodb://localhost/ecommerceDB");
    console.log("DB is connected");
  } catch (error) {
    console.error(error);
  }
}

export default connectDB;
