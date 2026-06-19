require("dotenv").config();

const express = require("express");
const path = require("path");

// const app = express();
// const PORT = 3000;

const app = express();
const PORT = process.env.PORT;

// serve static files

app.use(express.static(path.join(__dirname,"public"))); 


// serve the main page

app.get("/about",(req,res) => {
    res.sendFile(path.join(__dirname,"./view", "index.html"));
});

app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`);
});