// escribe la función suma acá
function sum(array) {
    let sumaAcum = 0;
    for (let i = 0; i < array.length; i++) {
        sumaAcum += array[i];
    }
    return `Suma de arreglos: ${sumaAcum}`;
  
}

// código de prueba
console.log(sum([1,2,3,4])) // 1 + 2 + 3 + 4 = 10
console.log(sum([10,25,15,5])) // 55
console.log(sum([15,25,35,25,20])) // 120
