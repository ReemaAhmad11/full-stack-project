import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db";
import authRouter from "./routes/auth.route";
import ItemRouter from "./routes/item.route";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
//DB
connectDB();

//Middlwares
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/item", ItemRouter);

//Port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`The server running in port ${PORT}`);
});
