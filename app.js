const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hola chido")
})
app.get("/jsonArray",(req,res)=>{
    res.json('[{"name": "Molecule Man","age": 29,"secretIdentity": "Dan Jukes","powers": ["Radiation resistance","Turning tiny","Radiation blast"]},{"name": "Madame Uppercut","age": 39,"secretIdentity": "Jane Wilson","powers": ["Million tonne punch","Damage resistance","Superhuman reflexes"]}]')
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("servidor corriendo");
})