const prompt = require('prompt-sync')();
const num = parseInt(prompt("Digite um valor numérico inteiro: "));
const quadrado = num * num;
console.log(`${quadrado} (${num} elevado ao quadrado)`);