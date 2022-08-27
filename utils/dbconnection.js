import mongoose from "mongoose";

const Mongo_url= "mongodb+srv://rajan:rajansingh123@cluster0.o3fyriv.mongodb.net/?retryWrites=true&w=majority/"
// const Mongo_url="mongodb+srv://admin:rajansingh123@apace.uqpv6t4.mongodb.net/?retryWrites=true&w=majority/apace"
const dbConnect = async () => mongoose.connect(Mongo_url);

export default dbConnect


