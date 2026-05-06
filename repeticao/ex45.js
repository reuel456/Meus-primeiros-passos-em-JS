const prompt = require('prompt-sync')();
let somaPares = 0;

console.log("Calculando o somatório dos valores pares de 1 a 500...");
prompt("Pressione ENTER para iniciar o cálculo...");
for (let i = 2; i <= 500; i += 2) {
    somaPares = somaPares + i;
}
console.log(`O somatório dos valores pares de 1 a 500 é: ${somaPares}`);