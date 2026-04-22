const prompt = require('prompt-sync')();
const distanciaKm = parseFloat(prompt("Digite a distância percorrida (km): "));
const tempoHoras = parseFloat(prompt("Digite o tempo gasto (horas): "));
const velocidadeMs = (distanciaKm / tempoHoras) / 3.6;
console.log(`Velocidade = ${velocidadeMs.toFixed(2)} m/s`);