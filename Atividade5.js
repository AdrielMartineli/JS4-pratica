const leia = require('readline-sync');
let codigo;
let quantidade;

codigo = leia.questionInt("Codigo do produto: ");
quantidade = leia.questionInt("Quantidade: ");

switch(codigo){
    case 1:
        console.log("produto: Cachorro Quente");
        console.log("Valor total: R$ ", quantidade*10.00);
        break;
    case 2:
        console.log("produto: X-salada");
        console.log("Valor total: R$ ", quantidade*15.00);
        break;
    case 3:
        console.log("produto: X-Bacon");
        console.log("Valor total: R$ ", quantidade*18.00);
        break;
    case 4:
        console.log("produto: Bauru");
        console.log("Valor total: R$ ", quantidade*12.00);
        break;
    case 5:
        console.log("produto: Refrigerante");
        console.log("Valor total: R$ ", quantidade*8.00);
        break;        
    case 6:
        console.log("produto: Suco de laranja");
        console.log("Valor total: R$ ", quantidade*13.00);
        break;    
}

