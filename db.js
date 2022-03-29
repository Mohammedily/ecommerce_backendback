const mongoose = require("mongoose");


module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true,
    };
    try{
   mongoose.connect(process.env.DB, connectionParams);
   console.log("connected to database successfull")
    }catch(error){
   console.log(error);
   console.log("not connected database");
    }
}