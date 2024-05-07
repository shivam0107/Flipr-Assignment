const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    default:"google"
  },
  contact: {
    type: Number,
    default:"123456789"

  },
  gender:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  token:{
    type: String,
  }

});

module.exports = mongoose.model("User", userSchema);
