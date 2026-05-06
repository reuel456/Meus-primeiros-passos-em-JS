const prompt = require('prompt-sync')();
const base = Number(prompt("Digite o valor da base: "));
const expoente = Number(prompt("Digite o valor do expoente: "));
let potencia = 1;
for (let i = 1; i <= expoente; i++) {
    potencia = potencia * base;
}

console.log(`${base} elevado a ${expoente} = ${potencia}`);