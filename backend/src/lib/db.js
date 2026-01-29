import mongoose from "mongoose"

export const connectdb = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database connected to ${con.connection.host}`)
    } catch (error) {
        console.log("Database is not connected!")
    }
}