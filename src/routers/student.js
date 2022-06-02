const express = require("express");
const router = new express.Router();
const Student = require('../models/students');
module.exports = router;



// router.get("/",(req,res)=>{res.send(`Successfully working`)})
//create a new students

//Using promises
// router.post("/students", (req, res) => {
//     //Get the user from DB 
//     console.log(req.body);
//     //to get data from postmane
//     const user = new Student(req.body);
//     //to send data from postman to mongo db
//     //Using promises .then use
//         user.save().then(()=>{
//             res.status(201).send(user);
//         }).catch((err)=>{
//             res.status(400).send(err);
//         });
    
// })

//Using async await
router.post("/students", async(req, res) => {
    try{
        console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(err){res.status(400).send(err)}
})

//Read data of registred student http://localhost:3000/students
router.get('/students', async(req,res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
        console.log(studentsData);
    }catch(err){
        res.send(err);
        console.log("ERRO");
    }
})
//get individual student data 
router.get('/students/:id', async(req,res)=>{
    try{
        //Get the id 
        const id = req.params.id;
        const studentData = await Student.findById(id);
        if(!student){
            return res.status(404).send();
        } else{
            res.send(studentData);
        }
    }catch(err){
        res.status(500).send(err);
    }
})

//Delete the student by id
router.delete("/students/:id", async(req, res) => {
    try{    
        const id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(id);
        if(!id){
            return res.status(404).send()
        } else{
            res.send(deleteStudent);
        }
    }catch(err){
        res.status(500).send(err);
    }
})

//Update student detail 
router.patch("/students/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(id, req.body,{
            new:true
        });
        res.send(updateStudents)
    } catch(err){
        res.status(400).send(updateStudents);
    }
})