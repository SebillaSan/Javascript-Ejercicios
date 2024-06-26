function contarLetras(palabra) {
    // Crear un objeto para almacenar las letras y sus repeticiones
    let conteoLetras = {};

    // Recorrer cada letra de la palabra
    for (let letra of palabra) {
        // Si la letra ya está en el objeto, incrementar su conteo
        if (conteoLetras[letra]) {
            conteoLetras[letra]++;
        } else {
            // Si la letra no está en el objeto, agregarla con un conteo de 1
            conteoLetras[letra] = 1;
        }
    }

    // Devolver el objeto con las letras y sus repeticiones
    return conteoLetras;
}

// Ejemplo de uso
let palabra = "PALA";
let resultado = contarLetras(palabra);
console.log(resultado); // { P: 1, A: 2, L: 1 }