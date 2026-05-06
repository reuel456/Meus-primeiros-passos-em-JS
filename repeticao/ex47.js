const prompt = require('prompt-sync')();
console.log("Exibindo números divisíveis por 4 (menores que 200):");
prompt("Pressione ENTER para listar os valores...");
for (let numero = 4; numero <= 196; numero += 4) {
    console.log(numero);
}