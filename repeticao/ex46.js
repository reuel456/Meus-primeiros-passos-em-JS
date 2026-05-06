const prompt = require('prompt-sync')();
let numero = 1;

console.log("Exibindo números ímpares de 0 a 200:");
prompt("Pressione ENTER para começar...");
while (numero <= 199) {
    console.log(numero);
    numero = numero + 2;
}