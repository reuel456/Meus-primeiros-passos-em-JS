const prompt = require('prompt-sync')();l
let areaTotal = 0;
let continuar;

console.log("--- Calculadora de Área Residencial ---");
do {
    const nome = prompt("Digite o nome do cômodo (ex: Sala, Cozinha): ");
    const largura = Number(prompt(`Digite a largura da(o) ${nome} (m): `));
    const comprimento = Number(prompt(`Digite o comprimento da(o) ${nome} (m): `));
    const areaComodo = largura * comprimento;
    areaTotal += areaComodo;

    console.log(`Área da(o) ${nome}: ${areaComodo.toFixed(2)} m²`);
    continuar = prompt("Deseja adicionar outro cômodo? (SIM/NÃO): ").toUpperCase();

} while (continuar === "SIM" || continuar === "S");
console.log("\n--- Resultado Final ---");
console.log(`Área total da residência: ${areaTotal.toFixed(2)} metros quadrados.`);