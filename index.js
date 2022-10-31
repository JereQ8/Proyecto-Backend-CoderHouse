
const colors= require("colors")

class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre= nombre,
        this.apellido= apellido,
        this.libros= libros,
        this.mascotas= mascotas
    }

    getFullName(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(autor, libro){
        this.libros.push({autor, libro})
    }
    getBookNames(){
        let libros=[]
        this.libros.forEach((libro)=>{
            libros=[...libros, libro.libro]
        })

        return libros
    }
}

let usuario1= new Usuario("Jeremias", "Quinteros", [
    {autor: "John Freud", libro: "God's dead"},
    {autor:"John Piper", libro: "Don't waste your life"}
], ["Simon"])

console.log(usuario1.getFullName().bgBlue)
console.log(colors.bgYellow(usuario1.countMascotas()))
usuario1.addMascota("Ramon")
console.log(colors.bgYellow(usuario1.countMascotas()))
console.log(colors.bgBrightMagenta(usuario1.getBookNames()))
usuario1.addBook("Paul Washer", "El Evangelio para cristianos")
console.log(colors.bgBrightMagenta(usuario1.getBookNames()))