function calcularTempoParaPouso(velocidadeInicial, desaceleracao, velocidadeSegura, tempoMaximo) {
    let tempo = (velocidadeInicial - velocidadeSegura) / desaceleracao;
    
    if (tempo > tempoMaximo) {
        return "Tempo máximo excedido. Reduza a velocidade inicial ou aumente a desaceleração.";
    }
    
    return `Tempo necessário para pouso seguro: ${tempo} segundos.`;
}

console.log(calcularTempoParaPouso(5000, 50, 5, 120));
