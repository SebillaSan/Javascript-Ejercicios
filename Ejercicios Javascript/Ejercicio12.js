// Crear una lista para almacenar los objetos de personas
let listaPersonas = [
    { nombre: "Ana", sexo: "F", edad: 30 },
    { nombre: "Juan", sexo: "M", edad: 25 },
    { nombre: "María", sexo: "F", edad: 40 },
    { nombre: "Pedro", sexo: "M", edad: 20 },
    { nombre: "Laura", sexo: "F", edad: 35 },
];

// Calcular el promedio de edad
function calcularPromedioEdad(personas) {
    let totalEdad = 0;
    for (let persona of personas) {
        totalEdad += persona.edad;
    }
    return totalEdad / personas.length;
}

// Obtener el nombre de la mujer con mayor edad
function obtenerMujerMayorEdad(personas) {
    let mujerMayorEdad = null;
    for (let persona of personas) {
        if (persona.sexo === "F") {
            if (mujerMayorEdad === null || persona.edad > mujerMayorEdad.edad) {
                mujerMayorEdad = persona;
            }
        }
    }
    return mujerMayorEdad ? mujerMayorEdad.nombre : null;
}

// Obtener el nombre del hombre con menor edad
function obtenerHombreMenorEdad(personas) {
    let hombreMenorEdad = null;
    for (let persona of personas) {
        if (persona.sexo === "M") {
            if (hombreMenorEdad === null || persona.edad < hombreMenorEdad.edad) {
                hombreMenorEdad = persona;
            }
        }
    }
    return hombreMenorEdad ? hombreMenorEdad.nombre : null;
}

// Calcular el promedio de edad de las mujeres
function calcularPromedioEdadMujeres(personas) {
    let totalEdad = 0;
    let contadorMujeres = 0;
    for (let persona of personas) {
        if (persona.sexo === "F") {
            totalEdad += persona.edad;
            contadorMujeres++;
        }
    }
    return contadorMujeres > 0 ? totalEdad / contadorMujeres : 0;
}

// Resultados
let promedioEdad = calcularPromedioEdad(listaPersonas);
let mujerMayorEdad = obtenerMujerMayorEdad(listaPersonas);
let hombreMenorEdad = obtenerHombreMenorEdad(listaPersonas);
let promedioEdadMujeres = calcularPromedioEdadMujeres(listaPersonas);

console.log("Promedio de edad:", promedioEdad);
console.log("Mujer con mayor edad:", mujerMayorEdad);
console.log("Hombre con menor edad:", hombreMenorEdad);
console.log("Promedio de edad de las mujeres:", promedioEdadMujeres);