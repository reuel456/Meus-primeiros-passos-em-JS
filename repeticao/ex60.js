const prompt = require('prompt-sync')();
let numero = 15;

console.log("Exibindo os quadrados dos números de 15 a 200 (passo 3):");
prompt("Pressione ENTER para começar...");
while (numero <= 200) {
    let quadrado = numero * numero;
    console.log(`${numero} ao quadrado = ${quadrado}`);
    numero = numero + 3;
}