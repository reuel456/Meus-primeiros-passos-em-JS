const prompt = require('prompt-sync')();
const nota1 = parseFloat(prompt("Digite a nota 1: "));
const nota2 = parseFloat(prompt("Digite a nota 2: "));
const nota3 = parseFloat(prompt("Digite a nota 3: "));
const nota4 = parseFloat(prompt("Digite a nota 4: "));
const media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media > 7) {
    console.log(`Média: ${media.toFixed(1)}, Aprovado`);
} else if (media >= 5) {
    console.log(`Média: ${media.toFixed(1)}, Exame`);
} else {
    console.log(`Média: ${media.toFixed(1)}, Reprovado`);
}