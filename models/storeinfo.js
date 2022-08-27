import mongoose  from "mongoose";

const storeSchema = new mongoose.Schema(
    {
        publicKey:{
        type:String,

    },
    secretKey:{
        type:String,

    },
    sandboxProduction:{
        type:String,
        
    },
    expiryDay:{
        type:Number,
    },
    autoTriggerCheckBox:{
        type:Boolean,
    }

},
{
    timestamps : true
},

);

export default mongoose.models.StoreInfo || mongoose.model("StoreInfo",storeSchema);