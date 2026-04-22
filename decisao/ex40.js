const prompt = require('prompt-sync')();
const v1 = parseFloat(prompt("Digite o primeiro valor: "));
const v2 = parseFloat(prompt("Digite o segundo valor: "));
const v3 = parseFloat(prompt("Digite o terceiro valor: "));
const soma = v1 + v2 + v3;
if (soma > 100) {
    console.log(soma);
}