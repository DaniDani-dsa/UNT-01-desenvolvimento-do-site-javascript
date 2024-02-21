let botaoExercicio = document.getElementById("botao");
let botaoQuebrado = false
let contaCliques = 0

botaoExercicio.style.backgroundColor="blue"

botaoExercicio.addEventListener('mouseover', ()=>{
    if(botaoQuebrado === false){
        botaoExercicio.style.backgroundColor="green";
    }
})

botaoExercicio.addEventListener('mouseout', ()=>{
    if(botaoQuebrado === false){
        botaoExercicio.style.backgroundColor="blue";
    }
})

botaoExercicio.addEventListener('click', ()=>{
    contaCliques++

    if(contaCliques >= 10){
        botaoExercicio.style.backgroundColor="red";
        botaoExercicio.innerHTML="Quebrado";
        botaoQuebrado = true;
    }
})

//Uso de arrow function para otimizar o código