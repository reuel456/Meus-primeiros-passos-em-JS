const prompt = require('prompt-sync')();
let expoente = 0;

console.log("Calculando as potências de 3 (expoente de 0 a 15):");
prompt("Pressione ENTER para começar...");
while (expoente <= 15) {
    let potencia = 3 ** expoente;
    console.log(`3^${expoente} = ${potencia}`);
    expoente++;
}