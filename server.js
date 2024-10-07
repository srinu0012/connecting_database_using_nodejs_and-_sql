const express=require("express")
const cors=require("cors")

const server=express()

const db=require("./db")

server.use(express.json())
server.use(cors())

server.listen(4003,()=>{
    console.log("server started")
})
server.get("/movies",(req,res)=>{
    db.getmovie().then((data)=>{
        
       res.send(data)
     
   
    }).catch((err)=>{
        res.send("get request error")
    })
    
})
server.post("/movies",(req,res)=>{
    db.postmovie(req.body.movie_name,req.body.budject,req.body.director).then((data)=>{
        res.send(data)
     }).catch((err)=>{
         res.send("post request error")
     })
})
server.put("/movies",(req,res)=>{
    db.putmovie(req.body.movie_name,req.body.budject,req.body.director,req.body.id).then((data)=>{
        res.send(data)
     }).catch((err)=>{
         res.send("put request error")

     })
})
server.delete("/movies",(req,res)=>{
    db.delmovie(req.body.id).then((data)=>{
        res.send(data)
     }).catch((err)=>{
         res.send("delete request error")

     })
})