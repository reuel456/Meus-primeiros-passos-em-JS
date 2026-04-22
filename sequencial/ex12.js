const prompt = require('prompt-sync')();
const valorEmReal = parseFloat(prompt("Digite o valor em real (R$): "));
const cotacaoDoDolar = 5.60;
const valorEmDolar = valorEmReal / cotacaoDoDolar;
console.log(`${valorEmDolar.toFixed(2)} (valor em dólar, considerando a cotação de ${cotacaoDoDolar.toFixed(2)})`);