let nome = "Mario";
const idade = 17;
const comidasFavoritas = ["chocolate", "abacaxi", "feijoada", "mamão", "alface"]

cumprimentos();

nome = "Douglas"
let quantidade = 10

if(idade >= 18){
    console.log("Acesso liberado");
}else{
    console.log("Acesso negado")
}

while(quantidade > 0){
    console.log("A quantidade atual é :" + quantidade)
    quantidade = quantidade-1
}


function cumprimentos(){
    console.log("Bom dia " + nome);
    console.log("Como você está?");
    console.log("A comida favorita de hoje é: " + comidasFavoritas[0]);
}

let pessoa = {
    nome: "Daniel",
    idade: 21,
    dataDeNascimento: "14/09/2002"
}

console.log(pessoa)
console.log(pessoa.idade)
console.log(pessoa["idade"])