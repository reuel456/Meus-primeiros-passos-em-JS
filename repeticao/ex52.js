const prompt = require('prompt-sync')();
let totalGraos = 0;
let quadro = 1;

console.log("Calculando o somatório de grãos no tabuleiro de xadrez...");
prompt("Pressione ENTER para calcular...");
while (quadro <= 64) {
    let graosNoQuadro = 2 ** (quadro - 1);
    totalGraos = totalGraos + graosNoQuadro;
    
    quadro = quadro + 1;
}
console.log(`Total de grãos de trigo no tabuleiro de xadrez = ${totalGraos}`);