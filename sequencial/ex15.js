const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));
const num4 = parseFloat(prompt("Digite o quarto número: "));
const produto = num1 * num3;
const soma = num2 + num4;
console.log(`Produto: ${produto} (${num1} * ${num3}), Soma: ${soma} (${num2} + ${num4})`);