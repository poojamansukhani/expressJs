const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true, "Email id already presents"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10,
        unique:true,
    },
    address:{
        type:String,
        required:true,
    }
})

//Will create new collection using mocel
//Student class so capital letter , Student is collection name singular
const Student = new mongoose.model('Student', studentSchema);
module.exports = Student; 
