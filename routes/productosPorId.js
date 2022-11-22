const {Router}= require("express")
const router= Router()
const {Contenedor} = require("../handleFiles")
const datos= new Contenedor("./serverProducts.json")
 

router.get("/api/productos/:id", async (req, res)=>{
    await datos.giveId()
    let allProducts= await datos.getAll()
    const productFound= allProducts.find(product=> product.id == req.params.id)
    if(productFound){
        res.json(productFound)
    }
    else{
        res.status(404).send({error:"Product not found"})
    } 
    
})

router.put("/api/productos/:id", async (req, res)=>{
    await datos.giveId()
    let allProducts= await datos.getAll();
    if(allProducts[req.params.id]){
        const newArrayProducts= allProducts.map((product)=> product.name === req.body.name ? {...product, ...req.body} : product);
        datos.deleteAndSave(newArrayProducts)
        res.json(newArrayProducts)
        
    }
    else res.status(404)
})

// En el response vamos a ver que el elemento que borremos segun el id parece no haber sido borrado, pero enrealidad si lo fue.
// Lo que pasa es que antes de mandar el response acomode todos los ids para que no haya sobresaltos de id (por ejemplo: id: 1, id:3)

router.delete("/api/productos/:id", async (req, res)=>{
    await datos.giveId()
    let allProducts= await datos.getAll();
    allProducts.splice(req.params.id - 1, 1)
    await datos.deleteAndSave(allProducts)
    await datos.giveId()
    let idsOrdenados= await datos.getAll()
    res.send(idsOrdenados)
})
module.exports= router