
const express=require('express');
const app=express()
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server is working on ${PORT}`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 
 
module.exports=app