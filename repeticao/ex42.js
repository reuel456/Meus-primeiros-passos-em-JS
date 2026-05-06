const prompt = require('prompt-sync')();
let raio = Number(prompt("Digite o valor do raio: "));
let altura = Number(prompt("Digite o valor da altura: "));
const PI = 3.14159;
let volume = PI * (raio ** 2) * altura;
console.log(`O volume calculado é: ${volume.toFixed(2)}`);