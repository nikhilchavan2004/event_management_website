import express from "express";
import { dbconnect } from "./database/connect.js";
import dotenv from "dotenv";
import msgr from "./router/msgr.js";
import cors from "cors";
const app = express();
dotenv.config({
  path: "./config/config.env",
});

app.use(
  cors({
    origin: "http://localhost:3001", // Update this to match your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow necessary methods
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/msg", msgr);
dbconnect();
export default app;
