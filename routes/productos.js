const {Router}= require("express")
const router= Router()
const {Contenedor} = require("../handleFiles")
const datos= new Contenedor("./serverProducts.json")
 

router.get("/api/productos", async (req, res)=>{
    await datos.giveId()
    let allProducts= await datos.getAll()
    res.send(allProducts)
    
})

router.post("/api/productos", async (req, res)=>{ 
    await datos.giveId()
    datos.save(req.body)
    res.send(req.body.id)
    
})

router.get("/productoRandom", async (req, res)=>{
    await datos.giveId()
    let allProducts= await datos.getAll()
    let x = Math.ceil(Math.random()* allProducts.length - 1);
    res.json(allProducts[x])
    datos.giveId()
}) 



module.exports= router