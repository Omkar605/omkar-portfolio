require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const allowedOrigins = ["https://my-portfolio-omega-eight-85.vercel.app"];
app.use(
  cors({
    origin: allowedOrigins, // Allow only your frontend
    methods: ["GET", "POST"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Allowed headers
    credentials: true, // If using cookies or authentication
  })
);
app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"));

app.use("/contact", require("./routes/contact"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
