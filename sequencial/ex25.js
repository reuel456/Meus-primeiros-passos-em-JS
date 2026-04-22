const prompt = require('prompt-sync')();
const numero = parseInt(prompt("Digite um número inteiro: "));
const sucessor = numero + 1;
const antecessor = numero - 1;
console.log(`Sucessor: ${sucessor}, Antecessor: ${antecessor}`);