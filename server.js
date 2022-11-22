const express= require("express")
const productos= require("./routes/productos")
const productosPorId= require("./routes/productosPorId")
const path= require("path")


const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(productos)
app.use(productosPorId)

app.use(express.static("public"))


app.listen(8080, ()=>{
    console.log(`Server on port http://localhost:8080`)
})