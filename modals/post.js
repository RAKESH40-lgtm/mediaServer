const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    author:String,
    location:String,
    likes:Number,
    description:String,
    image:String,
    date:String
});

const postData=new mongoose.model("posts",postSchema)
module.exports=postData