import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // Path check kar


//we are connection database..
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connnected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        
        console.log("MONGODB connection error" , error);
        process.exit(1)
    }
}

export default connectDB