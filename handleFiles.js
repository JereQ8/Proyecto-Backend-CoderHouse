const fs= require("fs")



class Contenedor{
    constructor(archivo, id){
        this.archivo= archivo,
        this.id= id
    }

    async save(objeto){
        const file= await fs.promises.readFile(this.archivo, "utf-8", (err, data)=>{})
        const file_json= await JSON.parse(file)
        objeto.id= file_json.length
        await file_json.push(objeto)
        const nuevoArchivo= JSON.stringify(file_json)

        await fs.promises.writeFile(this.archivo, nuevoArchivo,"utf-8",()=>{})
        console.log("Archivo editado")
    }

    

    async getById(id){
        try{
            const file= await fs.promises.readFile(this.archivo, "utf-8", (err, data)=>{})
            const file_json= await JSON.parse(file);
            console.log(file_json[id])
            return file_json[id]
        }
        catch(err){
            throw new Error(err)
        }
    
    }


    async deleteAndSave(newArray){
        await fs.promises.writeFile(this.archivo, JSON.stringify(newArray) , "utf-8");
    }

    async getAll(){
        const data= await fs.promises.readFile(this.archivo, "utf-8") 
        return JSON.parse(data)
         
    }

    async deleteById(id){
        const file= await fs.promises.readFile(this.archivo, "utf-8", (err, data)=>{})
        const file_json=await JSON.parse(file);
        await file_json.splice(id, 1);
        console.log(file_json)
        await fs.writeFile(this.archivo, JSON.stringify(file_json) , "utf-8", ()=>console.log("Elemento eliminado"))
    }

    async deleteAll(){
        await fs.writeFile(this.archivo, "", "utf-8", ()=>{})
    }

    async giveId(){
        const file= await fs.promises.readFile(this.archivo, "utf-8", (err, data)=>{});

        const json= await JSON.parse(file);

        const newArray= json.map((product, index)=>{
            return {...product, id:index + 1}
        })
        await fs.promises.writeFile(this.archivo,JSON.stringify(newArray) )
    }

}

let archivo= new Contenedor("./Datos.json", 1)


/* SI QUERES PROBAR LOS METODOS ACA ESTAN  */

// archivo.save({dato: "Dato agregado por metodo save()"})
// archivo.getAll()
// archivo.getById(1)
// archivo.deleteById(2)
// archivo.deleteAll()

module.exports={Contenedor}