const express = require("express");
const path = require("node:path");
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/home.html"));
});

app.listen(PORT,(err)=>{
    err
        ? console.error("Server failed: ", err.message)
        : console.log(`Server running on http://localhost:${PORT}`);
});