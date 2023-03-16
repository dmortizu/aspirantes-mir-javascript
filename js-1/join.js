function join(arr){
    let a = '';
    for(let i of arr){
        a += i + ' '
    }
return a;
    
}

miarr = [2, 4, 6, 8, 10]    
console.log(join(miarr))