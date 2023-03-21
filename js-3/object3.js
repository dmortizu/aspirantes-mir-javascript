const receta = {

} //#1

receta.nombre = 'Sandwich';//#2
receta.ingredientes = []; //#3

receta.ingredientes.push({nombre: 'Pan', cantidad:2}); //#4
receta.ingredientes.push({nombre: 'Queso', cantidad:1}); //#5   

console.log(receta.ingredientes[0].nombre); //#6

let total = receta.ingredientes.reduce((acumulador,ingredientes) => acumulador + ingredientes.cantidad,0);

console.log(total);//#7

