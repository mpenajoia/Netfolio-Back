const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/assets', {useNewUrlParser:true})

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
    console.log(DB_URL)
  } else {
    mongoURI = "mongodb://localhost/assets";
    
  }


module.exports = mongoose;