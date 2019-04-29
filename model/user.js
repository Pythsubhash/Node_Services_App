const mongoose=require("mongoose");


// const Schema=mongoose.Schema();


const user=mongoose.Schema({
mobile:Number,
username:String,
password:String
})

module.exports=mongoose.model("User",user);


// {
//     username:"sjdgwj",
//     password:"admin"
// }