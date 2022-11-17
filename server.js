const express= require("express")
const {Contenedor}= require("./handleFiles")
// const fs= require("fs")
const productos= require("./routes/productos")
const productosPorId= require("./routes/productosPorId")

// const datos= new Contenedor("./serverProducts.json")


const app= express()
app.use(express.json())
app.use(productos)
app.use(productosPorId)

app.listen(8080, ()=>{
    console.log(`Server on port http://localhost:8080`)
})

