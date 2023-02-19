const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const postData=require('./modals/post')

const port=process.env.PORT || 8000;


const app=express();

mongoose.connect('mongodb+srv://Rakesh:h6waasOgqDgOHVq8@instadatas.pp1js.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log('connected to DB')})
.catch((err)=>{console.log(err)})

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({extended:false}));
app.use(cors())
//h6waasOgqDgOHVq8l


app.post('/add',(req,res)=>{
    const date = new Date
      let finalDate = date + ""
      finalDate = finalDate.split(" ");
      finalDate = finalDate.splice(1, 3).join(" ");
      postData.create({
      image:req.body.image,
      author:req.body.author,
      location:req.body.location,
      description:req.body.description,
      likes:Math.floor((Math.random() * 100) + 1),
      date:finalDate
  
    }).then(()=>{ 
      res.send("file and data uploaded successfully")
       console.log(req.body);
    }).catch((err)=>{
      console.log(err.message)
    })
   
  })
app.get("/postView",(req,res)=>{
  postData.find().then((data) => {
    res.send({data : data})
  }).catch((err) => {
    console.log(err)
  })
  console.log(req.body)
})




app.listen(port,()=>{
    console.log(`listening at ${port}`)
})