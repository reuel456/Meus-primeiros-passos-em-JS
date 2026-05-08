const prompt = require('prompt-sync')();

console.log("Calculando o fatorial de cada número ímpar entre 1 e 100...");
prompt("Pressione ENTER para iniciar o cálculo...");
for (let impar = 1; impar <= 100; impar += 2) {
    let fatorial = 1n;
    for (let i = 1n; i <= BigInt(impar); i++) {
        fatorial = fatorial * i;
    }
    console.log(`Fatorial de ${impar} = ${fatorial}`);
}