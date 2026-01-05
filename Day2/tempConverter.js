let tempC = 0;
let tempF = 24;

let cToF = (tempC * 9/5) + 32;
let ftoC = (tempF - 32) * 5/9;

let result = tempC !== 0 ? `Converting C to F: ${tempC}c converts to ${cToF}f` : `Converting F to C: ${tempF}f converts to ${ftoC}c`;
console.log(result)