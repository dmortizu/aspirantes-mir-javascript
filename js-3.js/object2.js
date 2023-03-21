const persona = { //#1
    nombre: 'Diego Mauricio',
    edad: 35,
    ciudad: 'Bogotá',
    profesion: 'Ingeniero'
}

console.log(persona); //#2

function presentacion(persona) { //#3
    let cadena = '';
    for (const [clave,valor] of Object.entries(persona)) {
        cadena += `${clave}: ${valor}\n`;
    }
    return cadena;
    
}

let mensaje = presentacion(persona); //#4

console.log(mensaje);//#5

persona.hobbies = ['music', 'deporte', 'lectura', 'cine'] //#6

console.log(persona);//#7

// for (const [clave,valor] of Object.entries(persona.hobbies)){
//     console.log(`${clave}: ${valor}`); //#8
    
// }

persona.hobbies.forEach(x => console.log(x));

