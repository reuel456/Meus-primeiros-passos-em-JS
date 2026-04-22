const prompt = require('prompt-sync')();
const a = parseInt(prompt("Digite o coeficiente a: "));
const b = parseInt(prompt("Digite o coeficiente b: "));
const c = parseInt(prompt("Digite o coeficiente c: "));
const delta = Math.pow(b, 2) - (4 * a * c);

if (delta >= 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`x1 = ${x1}, x2 = ${x2} (raízes da equação)`);
} else {
    console.log("Não existem raízes reais");
}