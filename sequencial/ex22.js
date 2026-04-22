const prompt = require('prompt-sync')();
const raio = parseFloat(prompt("Digite o valor do raio da esfera: "));
const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
console.log(`${volume.toFixed(2)} (volume da esfera)`);