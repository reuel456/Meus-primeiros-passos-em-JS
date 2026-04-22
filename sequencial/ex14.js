const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));
const soma = num1 + num2 + num3;
const quadradoSoma = soma * soma;
console.log(`${quadradoSoma} ((${num1} + ${num2} + ${num3})² = ${soma}² = ${quadradoSoma})`);