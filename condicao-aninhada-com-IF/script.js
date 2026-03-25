let renda = Number(prompt("Digite sua renda:"));
//! simbolo de negação
//isNaN: is not number (verificação se NÃO é um número)
if(isNaN(renda)){
    if (renda >= 3000){
        let nomeLimpo = prompt("Nome limpo? (sim ou nao)");
        if (nomeLimpo === "sim"){
            alert("Financeiro aprovado");
        }else{
            alert("Nome negativo");
        }
    }else{
        alert("Renda insuficiente");
    }
}