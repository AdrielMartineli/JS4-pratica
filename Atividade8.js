const leia = require('readline-sync');
let saldo =1000;
let codigo;
let valor;

console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Deposito");

codigo = leia.questionInt("Operacao: ");

if(codigo> 3 || codigo < 0){
    console.log("Operacao invalida!!");
}else{
    switch(codigo){
        case 1:
            console.log("Operacao - saldo")
            console.log("Saldo: ", saldo.toFixed(2));
        break;
        case 2:
            valor = leia.questionFloat("Valor: R$ ");
            if(valor>saldo){
                console.log("Saldo insuficiente!!");
            }else{
                saldo -= valor;
                console.log("Novo saldo: R$ ", saldo.toFixed(2));
            }
        break;
        case 3:
            valor = leia.questionFloat("Valor: R$ ");
            saldo +=valor;
            console.log("Novo Saldo R$: ", saldo.toFixed(2));

            
    }
}