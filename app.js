//requirimiento de express
const express = require("express");
const path = require("node:path");
//instancia de express
const app = express();
//definicion del pueto de escucha
const PORT = process.env.PORT ?? 3000;

//establecer carptea public como carpeta de achivos estaticos
app.use(express.static('./public'));

//deficnion de rutas
app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/home.html"));
});

//inicio de servidor
app.listen(PORT,(err)=>{
    err
        ? console.error("Server failed: ", err.message)
        : console.log(`Server running on http://localhost:${PORT}`);
});