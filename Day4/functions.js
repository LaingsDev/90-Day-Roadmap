function isPasswordValid(password){
    if (password.length >= 8){
        return true;
    } else {
        return false;
    }
}

console.log(isPasswordValid("jimmy"))
console.log(isPasswordValid("12345678"))
console.log(isPasswordValid("123456789999"))

function isAdult(age){
    return age >= 18;
}

let age = 15
console.log(isAdult(age) ? "You are a adult" : "You are not a adult yet")