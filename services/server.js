// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connectDB = require("../config/db");
// require("dotenv").config();

// // middleware

// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

// app.use(express.json());
// connectDB();

// app.use("/auth", require("./routes/auth"));
// app.use("/notes", require("./routes/notes"));

// // start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => 
// console.log(`Server running a port ${PORT}`));