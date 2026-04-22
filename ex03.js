const prompt = require('prompt-sync')();
const raio = parseFloat(prompt("Digite o raio da lata (cm): "));
const altura = parseFloat(prompt("Digite a altura da lata (cm): "));
const volume = Math.PI * Math.pow(raio, 2) * altura;
console.log(`O volume da lata de óleo é: ${volume.toFixed(2)} cm³`);