import express from "express";
import mongoose from "mongoose";
import config from "./config";
import userDataRouter from "./routes/userDataRoutes";

// Koneksi database
mongoose.connect(config.databaseConn);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Mongoose Connection Error", error);
});

// jika berhasil konek ke database
database.on("connected", () => {
  console.log("Database Connected");
});

// Menjalankan Server
const app = express();

// API data
app.use(express.json());
app.use("/api", userDataRouter);

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});

export default app;
