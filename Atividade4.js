const leia = require('readline-sync');
let tipo1, tipo2, tipo3;

tipo1= leia.question("tipo1 ");
tipo2= leia.question("tipo2 ");
tipo3= leia.question("tipo3 ");


if(tipo1 === "vertebrado"){    
    if(tipo2 === "ave"){   
        if(tipo3 === "carnivoro"){
            console.log("Aguia");
        }else if(tipo3 === "onivoro"){
            console.log("pomba")
        }
    }else if(tipo2 === "mamifero"){ 
        if(tipo3 === "onivoro"){
            console.log("Homem");
        }else if(tipo3 === "herbivoro"){
            console.log("vaca")
        }
    }
}else if(tipo1 === "invertebrado"){ 
    if(tipo2 === "inseto"){
        if(tipo3 === "hematofago"){
            console.log("Pulga");
        }else if(tipo3 === "herbivoro"){
            console.log("Lagarta")
        }
    }else if(tipo2 === "anelideo"){
        if(tipo3 === "onivoro"){
            console.log("Minhoca");
        }else if(tipo3 === "hematofago"){
            console.log("Sanguessuga")
        }
    }
}