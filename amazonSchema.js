const mongoose=require("mongoose")
const amozonSchema=mongoose.Schema({
    pid:Number,
    pname:String,
    pdesc:String,
    pprice:Number,
    pcat:String,
    pimage:String
    
})
module.exports=mongoose.model("amazon",amozonSchema)