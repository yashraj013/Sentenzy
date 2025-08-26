import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
import jsonwebtoken from "jsonwebtoken"
import cookieParser from "cookie-parser"
import connectDB from "./db/db.js"; 

connectDB();

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

//API ENDPOINTS
app.get('/', (req, res) => {
    res.send("API Working")
})

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on the port: ${port}`);
});