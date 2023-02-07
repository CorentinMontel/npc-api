import express from "express"
import Routes from "./routes";
import mongoose from "mongoose";


// Instantiate Express app
const app = express()
const port = 3000

app.use(async (req, res, next) => {
    await mongoose.connect('mongodb://npc:pass@localhost:27017/npc');

    res.on('finish', async () => {
        await mongoose.connection.close()
    })

    next()
})

// Register routes
Routes(app)

// Start webserver
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})