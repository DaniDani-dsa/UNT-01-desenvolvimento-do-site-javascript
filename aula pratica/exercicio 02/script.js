const campo1 = document.getElementById("campo-01");
const campo2 = document.getElementById("campo-02");
const seletor = document.getElementById("operacao");
const botao = document.getElementById("botao");
let resposta = document.getElementById("resposta");

botao.addEventListener("click", calcular);

function calcular(){
    const valor01 = Number(campo1.value);
    const valor02 = parseInt(campo2.value);

    const operacao = seletor.value

    if(operacao === "soma"){
        resposta.innerHTML = valor01 + valor02;
    }else if(operacao === "subtracao"){
        resposta.innerHTML = valor01 - valor02;
    }else if(operacao === "multiplicacao"){
        resposta.innerHTML = valor01 * valor02;
    }else if(operacao === "divisao"){
        resposta.innerHTML = valor01 / valor02;
    }
}