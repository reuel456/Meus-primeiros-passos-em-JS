const prompt = require('prompt-sync')();
const valorEmDolar = parseFloat(prompt("Digite o valor em dólar (US$): "));
const cotacaoDoDolar = 5.60;
const valorEmReal = valorEmDolar * cotacaoDoDolar;
console.log(`${valorEmReal.toFixed(1)} (valor em real, considerando a cotação de ${cotacaoDoDolar.toFixed(2)})`);