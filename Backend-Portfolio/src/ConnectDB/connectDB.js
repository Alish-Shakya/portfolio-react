import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017/portfolio");
};

export default connectDB;
