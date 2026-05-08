const prompt = require('prompt-sync')();
let somatorio = 0;
let totalValores = 0;
let media = 0;

console.log("Digite valores positivos para somar. Para parar, digite 0 ou um número negativo.");
while (true) {
    let valor = Number(prompt("Digite um valor: "));
    if (valor <= 0) {
        break; 
    }
    somatorio = somatorio + valor;
    totalValores = totalValores + 1;
    media = somatorio / totalValores;
}
console.log("\n--- Resultado Final ---");
console.log(`Somatório: ${somatorio}`);
console.log(`Total de valores lidos: ${totalValores}`);
console.log(`Média: ${totalValores > 0 ? media.toFixed(2) : 0}`);