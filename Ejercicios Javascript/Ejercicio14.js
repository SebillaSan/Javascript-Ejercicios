function obtenerDivisibles(minimo, maximo, divisor) {
    let divisibles = [];
    
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            divisibles.push(i);
        }
    }
    
    return divisibles;
}

// Ejemplo de uso
let minimo = 1;
let maximo = 30;
let divisor = 5;

let resultado = obtenerDivisibles(minimo, maximo, divisor);
console.log("Números divisibles por " + divisor + " entre " + minimo + " y " + maximo + ": " + resultado);