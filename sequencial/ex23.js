const prompt = require('prompt-sync')();
const medidaPes = parseFloat(prompt("Digite a medida em pés: "));
const medidaMetros = medidaPes * 0.3048;
console.log(`${medidaMetros.toFixed(3)} (medida equivalente em metros)`);