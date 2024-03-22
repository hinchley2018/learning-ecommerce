import { mongoose } from "mongoose";

const connectionString = process.env.ATLAS_URI || "mongodb://localhost:27017/";

async function connectToDatabase()  {
  try {
    await mongoose.connect(connectionString)
  } catch (error) {
    console.error(error)
  }
}

export { connectToDatabase }
