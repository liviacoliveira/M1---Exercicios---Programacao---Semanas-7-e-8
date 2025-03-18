function valorCompra (preco) {
    if (preco < 50) {
        return ("Frete não disponível!");
    }
    else if ( 50 <= preco && preco <= 199.99 ) {
        return ("Frete com custo adicional!");
    }
    else if (preco >= 200) {
        return ("Frete grátis!");
    }
 }

console.log (valorCompra(200));