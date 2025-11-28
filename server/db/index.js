import mongoose from 'mongoose';

export const connect = async () =>{
try{
  mongoose.connect(process.env.MONGO_URL)
  console.log("MongoDB connected")
}catch(e){
  console.log(e) 
}
}

export default connect;