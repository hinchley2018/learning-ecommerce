import { mongoose } from "mongoose";
import { config } from "dotenv"
config();
const connectionString = process.env.DB_URI;

async function connectToDatabase()  {
  try {
    await mongoose.connect(connectionString)
  } catch (error) {
    console.error(error)
    throw new Error("Failed to connect to mongodb")
  }
}

export { connectToDatabase }
