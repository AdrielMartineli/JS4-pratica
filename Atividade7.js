const leia = require('readline-sync');

let codigo;
let num1, num2;


num1 = leia.questionFloat("Digite o 1 numero: ");
num2 = leia.questionFloat("Digite o 2 numero: ");


console.log("1 - soma");
console.log("2 - subtracao");
console.log("3 - multiplicacao");
console.log("4 - divisao");
codigo = leia.questionInt("Operacao: ");

if(codigo> 4 || codigo < 0){
   console.log("Coloque um codigo valido");
}else{
    switch(codigo){
        case 1:
            console.log(num1 +' + '+num2+'=', num1+num2);
            break;
        case 2:
            console.log(num1 +' - '+num2+'=', num1-num2);
            break;
        case 3: 
            console.log(num1 +' * '+num2+'=', num1*num2);
            break;
        case 4:
            console.log(num1 +' / '+num2+'=', num1/num2);
            break;
    }
}

