const prompt = require('prompt-sync')();
const valor = parseInt(prompt("Digite um valor inteiro: "));
if (valor <= 3) {
    console.log(valor);
}