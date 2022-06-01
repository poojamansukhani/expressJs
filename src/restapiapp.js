const express = require('express');
const Student = require('./models/students');
require("./db/connection");
const student = require("./models/students");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//Register router
app.use(studentRouter);

app.listen(port, ()=> {
    console.log(`conne ction is set up at ${port}`)
});

