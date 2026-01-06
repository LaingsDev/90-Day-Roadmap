function greet(name){
    return name.length > 0 ? `Hello, ${name}` : "Hello, guest!"
}

let message = greet("Matthew")
console.log(message)
message = greet("")
console.log(message)
message = greet("Greg")