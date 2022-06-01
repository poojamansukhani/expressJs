const mongoose = require("mongoose");

//Below  line will return promise & create DB if not there in mongo
mongoose.connect("mongodb://localhost:27017/devDataNode", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connection successful")
}).catch((err)=>console.log(err));

//Schema which defines structure of document
const devListSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    type: String,
    status: Number,
    active: Boolean,
    date: {
        type:Date,
        default: Date.now
    }
})

//collection creation
const Devlist = new mongoose.model("Dev", devListSchema);

//Create or insert document
const createDocument = async()=>{
    try{
        const reactDevLists = new Devlist({
            name: "React JS",
            type: "Front End",
            status: 90,
            active: true,
        })
        const angularDevLists = new Devlist({
            name: "angular JS",
            type: "Front End",
            status: 50,
            active: true,
        })
        const mongoDevLists = new Devlist({
            name: "Mongo DB",
            type: "DB",
            status: 50,
            active: true,
        })
        const expressDevLists = new Devlist({
            name: "Express JS",
            type: "DB",
            status: 40,
            active: true,
        })
        //save method will return promise 
        //if single documen need to insert then use save method
        //const result = await reactDevLists.save();
        //if multiple document need to insert then use 
        const res = await Devlist.insertMany([angularDevLists,mongoDevLists,expressDevLists])
    }catch(err){
        console.log(err)
    }
}
//call method to insert document
// createDocument();

//Read Data 
const getDocument = async ()=>{
    const result = await Devlist.find();
    //Pass Qyery
    const results = await Devlist.find({type:"DB"}).select({name:1}).limit(1);
    //$gt operator for greter than $ indicates that this is its operator
    const results1 = await Devlist.find({status:{$gt:40}}).select({_id:0, status:1});
    //Logical operator and or 
    const results3 = await Devlist.find({$or:[{type:"DB"}, {status:50}]});
    const results4 = await Devlist.find({$and:[{type:"DB"}, {status:40}]});
    // console.log("Reading data", result);
    // console.log("Reading querying data", results);
    // console.log("Status greter than 40", results1);
    // console.log("Or operator", results3);
    // console.log("and operator", results4);
}
getDocument()

