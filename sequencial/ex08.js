const prompt = require('prompt-sync')();
const comprimento = parseFloat(prompt("Digite o comprimento: "));
const largura = parseFloat(prompt("Digite a largura: "));
const altura = parseFloat(prompt("Digite a altura: "));
const volume = comprimento * largura * altura;
console.log(`O volume da caixa retangular é: ${volume}`);