const express = require("express");
const app = express();
let path = require("path")
const publicPath= path.join(__dirname,"public");

console.log(publicPath);
app.listen(3000,()=> console.log("El servidor se ha inicializado con exito"));
app.use(express.static(publicPath));

app.get("/", (req, res)=>res.sendFile(path.join(__dirname,"views/home.html")))