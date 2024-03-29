import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import issueRoute from "./routes/issueRoute";

// 1. connect to mongoDB database
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("connected to database!");
});

// 2. init express
const app = express();
app.use(express.json());
app.use(cors());

// 3. api
// health check
app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "healthy server" });
});

// issue api route
app.use("/api/issue", issueRoute);

// 4. run server
app.listen(8000, () => {
  console.log("server started on port 8000");
});
