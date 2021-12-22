const mongoose = require('mongoose')

let mongoURI = "";

mongoose.connect(mongoURI, {useNewUrlParser:true})

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/assets";
    
  }


module.exports = mongoose;