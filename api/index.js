import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import getAllLogs from "./routes/logs.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use("/api", getAllLogs); // ensure getAllLogs is properly defined

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  connect();
  console.log("Connected to backend.");
});
