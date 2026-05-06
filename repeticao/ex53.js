const prompt = require('prompt-sync')();
let somatorio = 0;

console.log("Leitura de 15 valores e soma de seus fatoriais.");
for (let i = 1; i <= 15; i++) {
    let valor = Number(prompt(`Digite o ${i}º valor: `));
    let fatorial = 1;
    for (let j = 1; j <= valor; j++) {
        fatorial = fatorial * j;
    }

    somatorio = somatorio + fatorial;
}
console.log(`\nSomatório da fatorial de cada valor lido: ${somatorio}`);