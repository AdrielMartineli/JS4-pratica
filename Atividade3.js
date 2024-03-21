const leia = require("readline-sync");
let nome;
let idade;
let primeiraDoacao;
let bool;
nome = leia.question("Digite o Nome do doador: ");
idade = leia.questionInt("Digite a Idade do Doador: ");
primeiraDoacao = leia.question("Primeira doacao de sangue?");
if (primeiraDoacao == "true") {
  bool = true;
} else {
  bool = false;
}

if (idade >= 18 && idade <= 60) {
  console.log(nome + " esta apto para doar sangue! ");
} else if (idade < 18 || (idade > 60 && idade < 69 && bool == true)) {
  console.log(nome + " nao esta apto para doar sangue! ");
} else if (idade > 69) {
  console.log(nome + " nao esta apto para doar sangue! ");
} else {
  console.log(nome + " esta apto para doar sangue! ");
}
