const prompt = require('prompt-sync')();
let somatorio = 0;
let contador = 0;

console.log("Leitura de 10 valores reais para cálculo de soma e média:");
while (contador < 10) {
    let valor = Number(prompt(`Digite o ${contador + 1}º valor: `));
    somatorio = somatorio + valor;
    contador = contador + 1;
}
let media = somatorio / 10;
console.log(`\nSomatório: ${somatorio.toFixed(2)}`);
console.log(`Média: ${media.toFixed(2)}`);