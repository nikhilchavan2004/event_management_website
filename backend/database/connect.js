import mongoose from "mongoose";

export const dbconnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "MERN" })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.error("Connection error:", err);
    });
};
