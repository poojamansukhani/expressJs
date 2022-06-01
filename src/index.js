const express = require('express');
const path = require('path');
//to create express app u have to call express function
const app = express();

// console.log(__dirname);
console.log("path", path.join(__dirname, "../public"));
const staticPath =path.join(__dirname, "../public");
//Built in middle ware 
app.use(express.static(staticPath))
//Now  this is express app


//app.get(route, callback) to get the data from server
//callback function have two parameter req & response
//request object represents HTTP request and 
//has properties for the request query string, parameter body,
//HTTP headers , etc.

//Response object represents the HTTP response
//that the express app sends when it receieve an HTTP request. 

//API 
//get - read , post - create, put - update, delete - delete

app.get("/", (req, res) => {
    //when request then server hould send in node we used res.end()
    res.send("Hello from the express");
    //pass static html

});
app.get("/about", (req,res) => {
    res.send("Hello from about page");
})
app.listen(3000, () => {
    console.log("Listening")
});

