//variaveis
//dados de entrada
//dados de saída
const dado = ["1","2","3","4","5","6"]

const elementoResposta = document.querySelector("#resposta")
const respostasP =[
    "Nossa, que Sorte!",
    "Eu se fosse você, apostava na loteria!",
    "Que sorte em!",
    "Você tem sorte demais!",
    "Uau, hoje é seu dia!"
]

//c
const respostasN =[
    "Hoje não é seu dia!",
    "Nem aposte na Loteria.",
    "A sorte passou foi longe.",
    "Tente novamente em outra vida.",
    "Melhor desistir de jogos de sorte."
]

const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")


// clicar em Boa sorte!
function fazerTeste() {
    
    //Gerar número aleatorio
    const totalRespostasP = respostasP.length
    const numeroAleatorioP = Math.floor(Math.random() * totalRespostasP)
    const totalRespostasN = respostasN.length
    const numeroAleatorioN = Math.floor(Math.random() * totalRespostasN)
    
    //Gerar número do dado aleatório
    const totalDado1 = dado.length
    const dadoAleatorio1 = Math.floor(Math.random() * totalDado1)
    const dadoJogado1 = dado[dadoAleatorio1]

    const totalDado2 = dado.length
    const dadoAleatorio2 = Math.floor(Math.random() * totalDado2)
    const dadoJogado2 = dado[dadoAleatorio2]
    const pergunta = "<div>" + dadoJogado1 + "," + dadoJogado2 + "</div>"


    if (num1.value == "" && num2.value == "") {
        alert("Poxa, esqueceu dos números! :(")
        return
    }

    if (num1.value == "") {
        alert("Ainda está faltando um número")
        return
        
    }

    if (num2.value == "") {
        alert("Opa, está faltando um número")
        return
        
    }

    if (num1.value == (dadoJogado1) && num2.value == (dadoJogado2)) {
        elementoResposta.innerHTML = pergunta + respostasP[numeroAleatorioP] 
      
    }
    else{
        elementoResposta.innerHTML = pergunta + respostasN[numeroAleatorioN]
    }


    elementoResposta.style.opacity = 1;
//sumir a resposta depois de 3s
setTimeout(function(){
    elementoResposta.style.opacity = 0;
}, 3000);
}