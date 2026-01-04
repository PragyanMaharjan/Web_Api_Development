import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

// Middleware
app.use(express.json())
app.use(cors())

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err))

// Routes
app.use("/api/auth", authRoutes)

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "Server running" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
