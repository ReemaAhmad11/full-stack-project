import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db";
import authRouter from "./routes/auth.route";


const app = express();
app.use(express.json());

//DB
connectDB();

//Middlwares
app.use("/api/v1/auth", authRouter);

//Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`The server running in port ${PORT}`);
});
