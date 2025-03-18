function MultiplicarMatrizesInvestimento(matrizA, matrizB) {
    // Verifica se o número de colunas de matrizA é igual ao número de linhas de matrizB
    if (matrizA[0].length !== matrizB.length) {
        return ("As matrizes não podem ser multiplicadas");

    // Inicializa a matriz resultado com zeros
    const linhasA = matrizA.length;
    const colunasB = matrizB[0].length;
    const matrizResultado = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        matrizResultado[i] = new Array(colunasB).fill(0);
    }

    // Realiza a multiplicação das matrizes
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < matrizA[0].length; k++) {
                matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return matrizResultado;
}

// Exemplo de uso da função
const investimentosAno1 = [[1000, 2000], [1500, 2500]];
const investimentosAno2 = [[1200, 1800], [1300, 2700]];

const resultadoMultiplicacao = MultiplicarMatrizesInvestimento(investimentosAno1, investimentosAno2);

console.log("Resultado da multiplicação das matrizes de investimento:");
console.log(resultadoMultiplicacao);
}