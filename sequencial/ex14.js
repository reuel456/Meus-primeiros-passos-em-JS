const prompt = require('prompt-sync')();

// 1. Entrada de Dados
// Solicite ao usuário que insira três valores numéricos.
const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));

// 2. Processamento
// Primeiro, calcule a soma dos três números.
const soma = num1 + num2 + num3;
// Em seguida, calcule o quadrado dessa soma.
const quadradoSoma = soma * soma;

// 3. Saída de Dados
// Exiba o resultado do quadrado da soma.
console.log(`${quadradoSoma} ((${num1} + ${num2} + ${num3})² = ${soma}² = ${quadradoSoma})`);