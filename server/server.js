// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jobRoutes = require("./routes/jobs");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://VIVEKM:VivekIVwfn@cluster0.3nduk.mongodb.net/jobBoard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/jobs", jobRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
