const pedro = {      //#1
    nombre: 'Pedro Perez',
    edad: 30,
    activo: true,
    hobbies: ['progamación','squash','piano'],
    saluda : function(){ //#6
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

console.log(pedro.edad); //#2

pedro.estatura = 1.8;

console.log(pedro.estatura); //#3

delete pedro.activo

console.log(pedro.activo); //#4

for (const [clave, valor] of Object.entries(pedro)){
    console.log(`${clave}: ${valor}`); //#5 
}

pedro.saluda();//#7