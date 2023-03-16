// escribe la función maxIndex acá
function maxIndex(array) {
  let max = 0;
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
      index = i
    }
  }
return index;

}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1