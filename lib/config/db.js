import mongoose from "mongoose";

const connection = {};

async function connectDB() {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect Database:", error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default connectDB;
