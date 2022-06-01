let buttonVerifica = document.querySelector("#bt-verifica");

buttonVerifica.addEventListener("click", function(e){
    e.preventDefault();

    let form = document.querySelector("#formulario-de-blocos");

    let erros = verificaBlocos(form);
    if(erros.length > 0){
        limpaErros()
        for(let i = 0; i < erros.length; i++){
            makeError(erros[i])
        }
        return;
    }

    form.reset();
    limpaErros();
    alert("Parabéns você acertou todos os blocos aleatórios")
    sorteiaBlocos()
})

function limpaErros(){
    let spans = document.querySelectorAll("span");
    spans.forEach((span)=>{
        span.textContent = ""
    })
}

function makeError(erros){
    switch(erros){
        case "Red":
            escreveErros(".error-red", "vermelho Incorreto")
        break;
        case "Blue":
            escreveErros(".error-blue", "Azul Incorreto")
        break;
        case "Green":
            escreveErros(".error-green", "Verde Incorreto")
        break;
        case "Pink":
            escreveErros(".error-pink", "Rosa Incorreto")
        break;
    }
}
function verificaBlocos(form){
    let erros = []
    if(form.vermelho.value != numRed){
        erros.push("Red")
    }

    if(form.azul.value != numBlue){
        erros.push("Blue")
    }

    if(form.verde.value != numGreen){
        erros.push("Green")
    }

    if(form.rosa.value != numPink){
        erros.push("Pink")
    }

    return erros
}

function escreveErros(elemento, msg){
    let el = document.querySelector(elemento)
    el.textContent = ""
    el.textContent = msg
}