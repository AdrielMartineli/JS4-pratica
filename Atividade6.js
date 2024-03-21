const leia =require('readline-sync');
let nome;
let cargo;
let salario;

nome = leia.question("Nome do colaborador: ");
cargo = leia.questionInt("Cargo: ");
salario = leia.questionFloat("Salário: ");

switch(cargo){
    case 1:
        console.log("Nome do colaborador", nome);
        console.log("Cargo: Gerente");
        console.log("Salário: R$ ", salario*1.10);
        break;
    case 2:
        console.log("Nome do colaborador", nome);
        console.log("Cargo: Vendedor");
        console.log("Salário: R$ ", salario*1.07);
        break;
    case 3:
        console.log("Nome do colaborador", nome);
        console.log("Cargo: Supervisor");
        console.log("Salário: R$ ", salario*1.09);
        break; 
    case 4:
        console.log("Nome do colaborador", nome);
        console.log("Cargo: Motorista");
        console.log("Salário: R$ ", salario*1.06);
        break;   
    case 5:
        console.log("Nome do colaborador", nome);
        console.log("Cargo: Estoquista");
        console.log("Salário: R$ ", salario*1.05);
        break;  
    case 6:
        console.log("Nome do colaborador", nome);
        console.log("Cargo: Tecnico de TI");
        console.log("Salário: R$ ", (salario*1.08) );
        break;      

}

