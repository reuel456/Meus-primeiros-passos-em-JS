const prompt = require('prompt-sync')();
const valor = parseInt(prompt("Digite um valor de 1 a 9: "));
if (valor >= 1 && valor <= 9) {
    console.log("O valor está na faixa permitida");
} else {
    console.log("O valor fora da faixa permitida");
}