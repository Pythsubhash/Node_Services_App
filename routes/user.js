const express=require("express");

const userRouter=express.Router();
const userController=require("./../controller/user");




// userRouter.get("/",(req,res)=>{
//     res.json({Name:"User List",Type:"JSON"});
// });


userRouter.get("/:userId",userController.userList);
userRouter.post("/login",userController.login);
userRouter.post("/register",userController.register);
userRouter.delete("/deleteuser/:userId",userController.deleteUser);




module.exports=userRouter;