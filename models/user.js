import mongoose  from "mongoose";

const userSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        maxlenght:20,

    },
    email:{
        type:String,
        required:true,

    },
    storename:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
    }
},
{
    timestamps : true
},

);

export default mongoose.models.User || mongoose.model("User",userSchema);