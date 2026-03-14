const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const TOKEN = "2b436d234bc5208dd84ef778f59d7d7a"

/* TEST PAGE */

app.get("/", (req,res)=>{
res.send("PAKOpaczka API działa")
})

/* PRICE ENDPOINT */

app.post("/price", async (req,res)=>{

try{

const response = await fetch(
"https://bigpack.kuriersystem.pl/api/rest/order/price",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+TOKEN
},
body:JSON.stringify(req.body)
})

const data = await response.json()

res.json(data)

}catch(err){

res.status(500).json({
error:"API error",
details:err.toString()
})

}

})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
console.log("Server działa na porcie " + PORT)
})
