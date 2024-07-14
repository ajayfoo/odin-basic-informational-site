
import express from 'express'
const app=express()

const PORT = 3000;
const dirname=import.meta.dirname+'/pages'

app.use(express.static(import.meta.dirname+'/public'))

app.get('/',(req,res)=>{
  res.sendFile('./index.html',{root:dirname})
});
app.get('/about',(req,res)=>{
  res.sendFile('./about.html',{root:dirname})
});
app.get('/contact-me',(req,res)=>{
  res.sendFile('./contact-me.html',{root:dirname})
});

app.use((req,res,next)=>{
  res.sendFile('./404.html',{root:dirname})
})

app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
