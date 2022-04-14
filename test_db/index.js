const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send({name:"Piash",others:"kicu nai"});
    console.log("Hello 3000");
})

app.post('/addUser',(req,res)=>{
    const user = req.body;
    user.id = Math.round(Math.random()*10);
    res.send(user);
})
app.listen(3000) 