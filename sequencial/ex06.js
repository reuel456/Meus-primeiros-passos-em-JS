const prompt = require('prompt-sync')();
let a = prompt("Insira o valor da variável A: ");
let b = prompt("Insira o valor da variável B: ");
console.log(`Antes da troca: A = ${a}, B = ${b}`);
let temp = a; 
a = b; 
b = temp;
console.log(`Após a troca: A = ${a}, B = ${b}`);
