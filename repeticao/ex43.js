const prompt = require('prompt-sync')();
let numero = Number(prompt("De qual número você deseja a tabuada? "));
let multiplicador = 1;

console.log(`\nTabuada do ${numero}:`);
while (multiplicador <= 10) {
    let produto = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${produto}`);
    multiplicador++;
}