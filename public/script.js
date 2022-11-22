const precioProducto= document.getElementById("precio")
const nombreProducto= document.getElementById("nombre")
const verProductos= document.getElementById("verProductos")
const botonEnviarProducto= document.getElementById("enviarProducto")
const form= new FormData(document.getElementById("formNewProduct")) 
const urlimg= document.getElementById("img")

// Traer productos del servidor

verProductos.addEventListener("click",()=>{
    fetch("http://localhost:8080/api/productos")
    .then(data=> data.json())
    .then(json=> console.log(json))
})

// Sumar un producto a la lista de productos
botonEnviarProducto.addEventListener("click",(e)=>{
    e.preventDefault();
    const newProduct= {name: nombreProducto.value, price:precioProducto.value, thumbnail:urlimg.value }
    fetch("http://localhost:8080/api/productos")
    .then(data=> data.json())
    .then(json=>{
        json.push(newProduct);
    })
})

