import express from "express"
import dotenv from "dotenv"
import authroute from "./src/router/Auth.router.js"

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(express.json())

app.use("/api/auth",authroute)
app.listen(port,()=>{
    console.log("http://localhost:50001/")
})