const leia = require('readline-sync');
let N;

N = leia.questionInt("Digite um numero: ");

if(N%2 == 0){
    if(N>=0){
        console.log("O Numero " +N+ " é par e Positivo!")
    }else{
        console.log("O Numero " +N+ " é par e Negativo!")
    }
}else{
    if(N>=0){
        console.log("O Numero " +N+ " é impar e Positivo!")
    }else{
        console.log("O Numero " +N+ " é impar e Negativo!")
    }
}