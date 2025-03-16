// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";
dotenv.config({
     path: "./.env"
     });

connectDB()





/*
2nd approach ...alg se file le ..db folder me ..vaha se code likhe vahe se function export kraaye aur index file me import kraa kr execute kraaye
effiii bnayii....fuction bnaa ke ....
import express from "express"
const app = express()



;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGDB_URI}/${DB_NAME}`)
         app.on("error",(error) => {
               console.log("error:", error)
         })

         app.listen(process.env.PORT,() => {
            console.log(`App is listening on port ${process.env.PORT}`);
         })

    } catch (error) {
        console.error("ERROR:", error)
        throw error
    }
})()
    */
