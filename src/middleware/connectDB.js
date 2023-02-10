import mongoose from "mongoose";


const connectDB = async (req, res, next) => {
    await mongoose.connect('mongodb+srv://MaleniaLaGrossPutréfiée');

    res.on('finish', async () => {
        await mongoose.connection.close()
    })

    next()
}

export default connectDB