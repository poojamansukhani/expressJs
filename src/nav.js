const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to home page");
})
app.get("/about", (req, res)=>{
    res.status(200).send("<h1>Welcome to about us page new</h1>");
})
app.get("/contact", (req, res)=>{
    //res.send("Welcome to contact page");
    //If multiple lines need to send 
    res.write("<h1>Welcome contact</h1>");
    res.write("<h1>Welcome contact Again</h1>");
    //you have to end here otherwise it will not stop loading it will thing I will nget omre content so u have to end it by res.send
    res.send();

})
app.get("/temp", (req,res)=>{
    res.status(200).send({
        //Object pass as response behind the scene express convert it as json check browser
        //Behind the scene express stringyfy it
        id:1,
        name:"pooja",
    })
})
app.get("/temp2", (req,res)=>{
    res.status(200).json([
        //Array of object Object pass as response behind the scene express convert it as json check browser
        //Behind the  express stringyfy it
        {
            id:1,
            name:"pooja",
        },
        {
            id:2,
            name:"pooja3",
        }
])
})
app.listen(3000, ()=>{
    console.log("Nav listening");
})