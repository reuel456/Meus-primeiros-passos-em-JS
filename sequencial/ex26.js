const prompt = require('prompt-sync')();
const num1 = parseInt(prompt("Digite o primeiro número inteiro (dividendo): "));
const num2 = parseInt(prompt("Digite o segundo número inteiro (divisor): "));
const resultadoDivisao = num1 / num2;
const resultadoQuadrado = resultadoDivisao * resultadoDivisao;
console.log(`${Math.floor(resultadoQuadrado)} (${num1} / ${num2} = ${resultadoDivisao}, ${resultadoDivisao}² = ${resultadoQuadrado})`);