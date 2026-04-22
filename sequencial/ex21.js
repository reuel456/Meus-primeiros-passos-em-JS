const prompt = require('prompt-sync')();
const base = parseInt(prompt("Digite o valor da base: "));
const expoente = parseInt(prompt("Digite o valor do expoente: "));
const potencia = base ** expoente;
console.log(`${potencia} (${base} elevado a ${expoente} é igual a ${potencia})`);