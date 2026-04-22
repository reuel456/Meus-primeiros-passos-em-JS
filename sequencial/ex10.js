const prompt = require('prompt-sync')();
const num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
const num2 = parseInt(prompt("Digite o segundo número inteiro: "));
const diferenca = num1 - num2;
console.log(`${diferenca} (${num1} - ${num2})`);