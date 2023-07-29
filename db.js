const mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/bookster',{})
const db=mongoose.connection
db.on("error",console.error.bind(console,'connection error'));
db.once("open",()=>{
    console.log("db connected");
})

module.exports=db