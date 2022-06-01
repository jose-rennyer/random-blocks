const canvas = document.querySelector("canvas");
const caneta = canvas.getContext("2d");
const colors = ["red", "blue", "green", "pink"]
const canvasLargura = Number(canvas.getAttribute("width"));
const canvasAltura = Number(canvas.getAttribute("height"));
const btSorteia = document.querySelector("#bt-random")
let numRed = 0
let numGreen = 0
let numBlue = 0
let numPink = 0





criaBloco(0, 0, 600, 400, "#fff")

function criaBorda(eixoX, eixoY, largura, altura, cor){
    caneta.strokeStyle = cor
    caneta.strokeRect(eixoX, eixoY, largura, altura)
}
function criaBloco(eixoX, eixoY, largura, altura, cor){
    caneta.fillStyle = cor;
    caneta.fillRect(eixoX, eixoY, largura, altura);
}

function blocoCompleto(eixoX, eixoY, largura, altura, cor, corB){
    criaBloco(eixoX, eixoY, largura, altura, cor);
    criaBorda(eixoX, eixoY, largura, altura, corB)
}

function random(numeroLimite){

    let aleatorio = Math.round(Math.random() * numeroLimite)

    if(aleatorio < 0){
        aleatorio = 1
    }
    return aleatorio
}

function sorteiaBlocos(){
    numRed = 0;
    numGreen = 0;
    numBlue = 0;
    numPink = 0;

    for(let a = 0; a < canvasAltura; a+= 50){
        for(let i = 0; i < canvasLargura; i+= 50){
            let corDaVez = colors[random(colors.length - 1)]
            switch(corDaVez){
                case "red":
                    numRed++
                break;
                case "green":
                    numGreen++
                break;
                case "blue":
                    numBlue++
                break;
                case "pink":
                    numPink++
                break;
            }
            blocoCompleto(i, a, 50, 50, corDaVez, "#000")
        }
    }  
}
sorteiaBlocos();

btSorteia.addEventListener("click", function(e){
    e.preventDefault();
    sorteiaBlocos();
})

