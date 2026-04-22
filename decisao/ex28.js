const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Digite um número inteiro: "));
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Neutro (Zero)");
}