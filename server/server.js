//BFt6zAQqXODEE0Z8
//mongodb+srv://shahul85198:BFt6zAQqXODEE0Z8@cluster0.zll0z.mongodb.net/
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

// mongoose.connect("mongodb+srv://shahul85198:BFt6zAQqXODEE0Z8@cluster0.zll0z.mongodb.net/")
mongoose
  .connect(
    "mongodb+srv://shahul85198:BFt6zAQqXODEE0Z8@cluster0.zll0z.mongodb.net/",
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
const PORT = process.env.PORT || 5173;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PORT", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    Credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
