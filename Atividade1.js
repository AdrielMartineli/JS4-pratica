const leia = require('readline-sync');
let A, B, C 

A = leia.questionInt("Digite o numero A: ");
B = leia.questionInt("Digite o numero B: ");
C = leia.questionInt("Digite o numero C: ");

if(A+B > C){
    console.log("A Soma de A + B é Maior do que C")
}else if(A+B<C){
    console.log("A Soma de A + B é Menor do que C")
}else{
    console.log("A Soma de A + B é igual a C")
}
