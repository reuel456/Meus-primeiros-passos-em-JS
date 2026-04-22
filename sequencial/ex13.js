const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));
const somaQuadrados = (num1 * num1) + (num2 * num2) + (num3 * num3);
console.log(`${somaQuadrados} (${num1}² + ${num2}² + ${num3}² = ${somaQuadrados})`);