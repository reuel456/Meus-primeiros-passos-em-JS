const prompt = require('prompt-sync')();
const num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
const num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let diferenca;
if (num1 > num2) {
    diferenca = num1 - num2;
} else {
    diferenca = num2 - num1;
}
console.log(`A diferença entre o maior e o menor é: ${diferenca}`);