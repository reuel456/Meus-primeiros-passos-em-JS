const prompt = require('prompt-sync')();
console.log("--- Cálculo de Combustível ---");
const distancia = parseFloat(prompt("Digite a distância percorrida (km): "));
const consumo = parseFloat(prompt("Digite o consumo do veículo (km/l): "));
const litros = distancia / consumo;
console.log(`A quantidade de combustível gasta na viagem é de ${litros} litros.`);