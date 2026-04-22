const prompt = require('prompt-sync')();
const raio = parseFloat(prompt("Digite o valor do raio da circunferência: "));
const area = Math.PI * Math.pow(raio, 2);
console.log(`${area.toFixed(2)} (área da circunferência)`);