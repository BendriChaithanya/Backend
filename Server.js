const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes"); 
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/products", router);
// const orderRoutes = require("./routes/orders.routes");
// app.use("/api", orderRoutes);


const MONGO_URL = "mongodb+srv://chaithanyabendri1_db_user:R8HY8EWwzJNQcWQS@cluster0.1ejx1x2.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(3000, () => console.log("Server running on http://localhost:5000"));



app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB Connection Error", err));
