const express = require("express");
const connectDB = require("./config/database");
const dataRoutes = require("./routes/dataRoutes");
const app = express();
app.use(express.json());
connectDB();
app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
