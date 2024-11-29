const express= require("express");
require("dotenv").config();
const app=express();

//middleware
var saludo=(req,res,next)=>{
    console.log("Hola");
    next();
}

app.get("/",saludo,(req,res)=>{
    res.send("hola estas en raíz");
});

app.use(saludo);

app.get("/home",saludo,(req,res)=>{
    res.send("hola estas en home");
});

const port=process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port)
});