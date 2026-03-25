//Declaração de variaveis e entrada de dados
let idade = Number(prompt("Insira sua idade"));
let estudante = prompt("É estudante? (sim ou nao)");
let professor = prompt("É professor? (sim ou nao)");
//condição com OU
if (idade >= 60 || estudante === "sim" || professor === "sim") {
    alert("Tem direito ao desconto");
}else{
    alert("Não tem desconto");
}