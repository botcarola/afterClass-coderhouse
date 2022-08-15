const operaciones = [
    {
        gasto: "playStation 5",
        precio: 300000,
        tipo: "salida",
        fecha: "May 20, 2022"
    },
    {
        gasto: "verdulería",
        precio: 3000,
        tipo: "salida",
        fecha: "August 2, 2022"
    },
    {
        gasto: "alquiler de castillo inflable",
        precio: 10000,
        tipo: "entrada",
        fecha: "July 15, 2022"
    },
    {
        gasto: "Joystick",
        precio: 25000,
        tipo: "salida",
        fecha: "August 11, 2022"
    },
    {
        gasto: "sueldo",
        precio: 100000,
        tipo: "entrada",
        fecha: "June 1, 2022"
    },
    {
        gasto: "hamburguesa",
        precio: 1000,
        tipo: "salida",
        fecha: "April 2, 2022"
    },
    {
        gasto: "Teclado gamer",
        precio: 10000,
        tipo: "salida",
        fecha: "March 7, 2022"
    },
    {
        gasto: "monitor",
        precio: 50000,
        tipo: "entrada",
        fecha: "March 18, 2022"
    },
    {
        gasto: "monitor",
        precio: 70000,
        tipo: "salida",
        fecha: "March 10, 2022"
    },
    {
        gasto: "sueldo",
        precio: 90000,
        tipo: "entrada",
        fecha: "May 20, 2022"
    },
    {
        gasto: "medias",
        precio: 200,
        tipo: "salida",
        fecha: "January 1, 2022"
    },
]

// repaso general

// parsear es convertir un tipo de dato en otro
const numero = "10"

const parseo = Number(numero)

console.log(typeof parseo)

// repaso funciones

// función que devuelve un dato

const suma = (a, b) => {
   return a + b
}

suma(5, 10)

console.log(suma(5,10))

// funcion que ejecuta una instrucción

const saludar = (nombre) => {
    console.log(`Hola ${nombre}`)

}

console.log(saludar("Azucena"))

let numeros = [1, 2 ,3 ,4 ,5 ,6 ,7]

            // 0  1  2  3  4  5  6

// iterar es realizar una acción varias veces

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i] + " " + [i])
}

// los métodos de arrays pueden resolverse desde un for
// por qué conviene usar un método?

// - porque nos proporcionana a nosotros facilidades
// - porque no vamos a tenre que restablecer la lógica

// FILTRO DE OPERACIONES

// (filter devuelve los elementos que cumplen con la condición)

let diferentesNumeros = [2, 1, 4, 6, 7 , 200, 2, 3 ,4,  12222, 5, 6, 7, 2 , 67453, 22222]

const numerosMayores = diferentesNumeros.filter((elementos) => {
    return elementos > 1000
})
console.log(numerosMayores)

let numerosMayoresConFor = []

// USO DE CORTOCIRCUITO AND &&

for ( let i = 0; i < diferentesNumeros.length; i++ ){
    diferentesNumeros[i] > 1000 && numerosMayoresConFor.push(diferentesNumeros[i])
} 
console.log(numerosMayoresConFor)

// 1) FILTRAR por entradas

const operacionesEntradas = operaciones.filter((elemento) => {
    return elemento.tipo === "entrada"
})

console.log(operacionesEntradas)

// 2) Filtrar por salidas


// 3) Ordenar por menor precio

const ordenarPorMenorPrecio = (array) => {
    const copiaOperaciones = [...array]

    copiaOperaciones.sort((a, b) => {
        return a.precio - b.precio
    }) 

    return copiaOperaciones
}

console.log(ordenarPorMenorPrecio(operaciones))


// 4) ordenar por mayor precio


//5) ordenar por más reciente

console.log(new Date("August 11, 2050") > new Date("August 11, 2030")) // los datos tipo fecha se pueden ordenar por menor o mayor

const ordenarPorMasReciente = [...operaciones].sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha)
})

console.log(ordenarPorMasReciente)

// 6) ordenar por menos reciente


// 7) ordenar A-Z

const ordenarAZ = [...operaciones].sort((a, b) => {

    if(a.gasto.toLowerCase() < b.gasto.toLowerCase()) {
        return -1
    }
})

console.log(ordenarAZ)


// 8) ordenar Z-A



// DESTRUCTURING

const articulos = {
    articulo1: "PlayStation 5",
    articulo2: "Joystick",
    articulos3: "Teclado noganet GAMER XX",
}

const precios = {
    playStation5: 300000,
    joystick: 25000,
    tecladoNoga: 5000
}

// cosas a tener en cuenta al destructurar
// 1) siempre para destructurar objetos tengo que llamar al mismo nombre de la propiedad del objeto
// 2) tenemos que hacer referencia al identificador que guarda ese 
// 3) siempre utilizamos las llaves para hacer referencia al objeto literal

const { joystick } = precios

console.log(joystick)

// 1) siempre para destructurar arrays tengo que tener en cuenta la posición del elemento
// 2) puedo generar un identificador a eleccción
// 3) siempre utilizamos las llaves para hacer referencia al array original


const mascotas = ["Hideo Kojima", "Luna", "Mía", "Panka"]

const [ , , mascotaDeAriel] = mascotas

console.log(mascotaDeAriel)

const [, , alquiler ] = operaciones

console.log(alquiler)

const { tipo } = alquiler

console.log(tipo)

console.log(operaciones.find((elemento) => {
    return elemento.gasto === "alquiler de castillo inflable"
}))