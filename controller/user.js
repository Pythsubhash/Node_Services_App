// const mongoose=require("mongoose");
const userModel=require("./../model/user");

const userList=(req,res)=>{
    // console.log(req.params.userId);
    // res.json({Name:"UserList",Type:"JSON"});

  userModel.find((err,data)=>{

      if(err){
          res.status(500).json("Error Occure")
      }else{
      res.status(200).json(data);
      }
  });

}

const login=(req,res)=>{
    console.log(req.body.userId);
    res.json({Name:"Login",Type:"JSON"});
}



const register=(req,res)=>{
  const user=userModel({
        username:req.body.username,
        password:req.body.password,
        mobile:req.body.mobile
  });

  console.log(user);

  user.save().then((resData)=>{


        // console.log(resData);
        res.status(200).json({message:"user register",user:resData});



  }).catch(err=>{
      res.status(505);
      res.json(err);
  })

    // res.json({Name:"Register",Type:"JSON"});
}
const deleteUser=(req,res)=>{
    console.log(req.params.userId);
    console.log(req.body.userId);
    if(req.body.userId!=""){
        userModel.deleteOne({_id:req.params.userId},(err,resData)=>{
            if(err){
                res.status(500).json("Error Occure")
            }else{
             res.status(200).json({message:"user deleted",resData});
            }
        });
    }else{
        res.json({message:"UserId Is blank"});
    }
    
    // res.json({Name:"User Delete",Type:"JSON"});

}

module.exports={
userList:userList,
login:login,
register:register,
deleteUser:deleteUser
}