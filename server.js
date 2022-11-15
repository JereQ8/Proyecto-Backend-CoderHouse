const express= require("express")
const {Contenedor}= require("./handleFiles")

const datos= new Contenedor("./serverProducts.json")

const app= express()
app.use(express.json())

app.listen(8080, ()=>{
    console.log(`Server on port http://localhost:8080`)
})

app.get("/productos", async (req, res)=>{
    let allProducts= await datos.getAll()
    res.send(allProducts)
})

app.get("/productoRandom", async (req, res)=>{
    let allProducts= await datos.getAll()
    let x = Math.ceil(Math.random()* allProducts.length - 1);
    res.json(allProducts[x])
}) 


