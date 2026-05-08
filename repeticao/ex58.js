const prompt = require('prompt-sync')();
let maior = -1;
let menor = -1;

console.log("Digite valores positivos. Para encerrar, digite um valor negativo.");
while (true) {
    let valor = Number(prompt("Informe um valor: "));
    if (valor < 0) {
        break;
    }
    if (maior < valor) {
        maior = valor;
    }
    if (menor === -1 || menor > valor) {
        menor = valor;
    }
}
if (maior !== -1) {
    console.log(`\nMaior valor: ${maior}`);
    console.log(`Menor valor: ${menor}`);
} else {
    console.log("\nNenhum valor positivo foi informado.");
}