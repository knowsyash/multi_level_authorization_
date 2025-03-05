const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./src/config/dbconnet');
const authRoutes = require('./src/routes/authRoutes')
const userRoutes = require('./src/routes/userRoute')
dotenv.config(); // Load .env variables
  dbConnect();

const app = express();
app.use(express.json());
// app.,use(cors());
app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
const PORT = process.env.PORT||4000 ; // Default to 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on("error", (err) => {
    console.error("Error starting server:", err.message);
});
