function fatorial(n1){
    fat = 1
    for(var i = n1; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(fatorial(4))