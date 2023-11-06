import express from "express";
import mongoose from "mongoose";
import dotEnv from "dotenv";
import cors from "cors";
import assetRouter from "./Routes/myroutes.js";

dotEnv.config();

//create express server
const PORT = process.env.PORT || 8787;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/api", assetRouter);

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Error connecting to DB:", err);
    });
};

app.listen(PORT, () => {
  connect();
  console.log(`Server is live on port ${PORT}`);
});
