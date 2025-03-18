class Veiculo {
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    constructor(modelo, ano, eficiencia) {
        super(modelo, ano);
        this.eficiencia = eficiencia;
    }

    CalcularConsumo(quilometragem) {
        return quilometragem / this.eficiencia;
    }
}

class Moto extends Veiculo {
    constructor(modelo, ano, eficiencia) {
        super(modelo, ano);
        this.eficiencia = eficiencia;
    }

    CalcularConsumo(quilometragem) {
        return quilometragem / this.eficiencia;
    }
}

// Criando instâncias e testando
let carro = new Carro("Sedan", 2022, 12); 
let moto = new Moto("Esportiva", 2021, 25); 

console.log(carro.CalcularConsumo(120)); // 10
console.log(moto.CalcularConsumo(120)); // 4.8
