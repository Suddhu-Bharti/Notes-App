const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://suddhu21:suddhu1234@inetbook.joofxj5.mongodb.net/notesDB")

app.use("/", require("./routes/noteRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})