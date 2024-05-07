const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

//route import
const userRoutes = require("./routes/userRoute");

//database connection
const database = require("./config/database");
database.connect();


//cors
const cors = require("cors");
app.use(cors({ origin: "https://localhost:3000", credentials: true }));


//rooute mount
app.use("/api/v1/auth", userRoutes);


//test route
 app.use("/", (req, res) => {
        return res.json({
          success: true,
          message:"your server is up and running fine"
        })
 })
      


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
