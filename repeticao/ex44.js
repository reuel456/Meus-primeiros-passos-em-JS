const prompt = require('prompt-sync')();
let soma = 0;
let contador = 1;

console.log("Calculadora de soma de números naturais.");
prompt("Pressione ENTER para calcular a soma de 1 a 100...");

while (contador <= 100) {
    soma = soma + contador;
    contador = contador + 1;
}
console.log(`A soma dos cem primeiros números naturais é: ${soma}`)