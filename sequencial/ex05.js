const prompt = require('prompt-sync')();
console.log("--- Cálculo de Prestação em Atraso ---");
const valorOriginal = parseFloat(prompt("Digite o valor original da prestação (R$): "));
const mesesAtraso = parseInt(prompt("Digite a quantidade de meses em atraso: "));
const taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (%): "));
const valorComJuros = valorOriginal * (1 + (taxaJuros / 100) * mesesAtraso);
console.log(`O valor da prestação em atraso é de ${valorComJuros.toFixed(2)} reais.`);