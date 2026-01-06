function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
        return null;
    }
    return a / b
}

console.log(add(5, 9))
console.log(add(5, 0))
console.log(add(5, -3))

console.log(subtract(5, 9))
console.log(subtract(5, 0))
console.log(subtract(5, -3))

console.log(multiply(5, 9))
console.log(multiply(5, 0))
console.log(multiply(5, -3))

console.log(divide(5, 9))
console.log(divide(5, 0))
console.log(divide(5, -3))