
const express=require('express');
const app=express();
const userRouter=require('./routes/user');
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

// app.use('/',(req,res)=>{
//     res.json({name:"APP",type:"JSON"});
// });

//Mongodb connection
// mongoose.connect("mongodb:localost:27017/nodejsapp",{
//     useNewUrlParser:true,
// })
mongoose.connect('mongodb://localhost:27017/nodejsapp');
// parse application/json
app.use(bodyParser.json())

app.use('/user',userRouter);
// app.use('/dashboard',userRouter);
// app.use('/product',userRouter);

module.exports=app;

