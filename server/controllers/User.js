
const User = require("../models/User")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const bcrypt = require("bcrypt")


exports.signup = async(req , res) => {

    try {
      
      console.log("userdata" , req.body.data);
      const {firstname , lastname , email , contact , address , password , gender} = req.body;

      if(!firstname || !lastname || !email || !contact || !address || !password || !gender){
        return res.status(401).json({
          message: "please fill all the feilds",
          success: false
        })
      }

      const userExist = await User.findOne({email});

      if(userExist){
        return res.status(401).json({
          message: "user is already exist",
          success: false
        })
      }



      const hashedPassword = await bcrypt.hash(password , 10);
    

      const newuser = await User.create({
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: hashedPassword,
        contact: contact,
        gender: gender,
        address: address,
       
      })

      return res.status(200).json({
        success: true,
        message: "user created successfully",
        // data:newuser
      })



    } catch (error) {
      console.log("error while signup" , error);
      return res.status(500).json({
        success: false,
        message: "error occured while signup"
      })

    }


}

exports.login = async(req , res) => {

  try {
    const {email , password} = req.body;

    //check if user exist

    const user= await User.findOne({email});

    if(!user){
      return res.status(401).json({
        success: false,
        message: "please login first",
      })
    }

    
    const userPassword = user.password;

    if(await bcrypt.compare(password , userPassword)){
      const payload = {
        name : user.firstname,
        password,
        email,

      }

      const token = jwt.sign(payload , process.env.JWT_SECRET , {
        expiresIn : "24h"
      });

      user.token = token;
      user.password = undefined;


    }else{

      return res.status(500).json({
        success: false,
        message: "please enter correct password",
      })

    }


    return res.status(200).json({
      success: true,
      message: "login successfully",
      data:user
    })


  } catch (error) {

    console.log("error in login" , error);

    return res.status(500).json({
      success: false,
      message: "Error occured while login",
    })

  }


}




exports.updateUser = async (req, res) => {
  
  const { firstName, lastName, email, password, contact, gender, address } = req.body;
  const userId = req.params.userId;

  try {
     
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Update user fields if provided
      if (firstName) user.firstName = firstName;
      if (lastName) user.lastName = lastName;
      if (email) user.email = email;
      if (contact) user.contact = contact;
      if (gender) user.gender = gender;
      if (address) user.address = address;

     
      if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
          user.password = hashedPassword;
      }

     
      await user.save();

      
      return res.status(200).json({ message: 'User details updated successfully' });
  } catch (error) {
      console.error('Error updating user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
};


  exports.deleteUser = async (req, res) => {
  const userId = req.body; 

  try {
      
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      await user.remove();

    
      return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    //find all the users 
    const users = await User.find({},
      {
      firstName: true,
      lastName: true,
      email:true
    });

    if (!users) {
      return res.status(401).json({
        success: false,
        message:"users not found please register first"
      })
    }

    console.log("users" , users)

    return res.status(200).json({
      success: true,
      message:"users get successfully",
      data: users
      
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:"error occured while fetching all users details"
    })
  }
}
