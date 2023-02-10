import express from "express"
import Routes from "./routes";
import mongoose from "mongoose";
import connectDB from "./middleware/connectDB";

mongoose.set('strictQuery', true);


// Instantiate Express app
const app = express()
const port = 3000

//connect tu mongoDB
app.use(connectDB)

// Register routes
Routes(app)

// Start webserver
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})