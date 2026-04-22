const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Digite um número inteiro: "));
const resultado = numero * 2;
if (resultado > 30) {
    console.log(resultado);
}
