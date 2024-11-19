/*
1) Pegar todos os inputs e o botao do formulário
2) Quando clicar no botão de enviar, verificar se os campos estão preenchidos
3) Caso os inputs não estejam preenchidos, botar uma borda vermelha nos inputs e mostrar a mensagem campo obrigatório
4) Caso os inputs estejam preenchidos, botar uma borda verde nos inputs.
*/

const formulario = document.getElementById("formulario")
const campos = document.querySelectorAll(".requerido")
const spans = document.querySelectorAll(".requerimento")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/


formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    nameValidacao()
    emailValidacao()
    telefoneValidacao()
    mensagemValidacao()
})

function setError(index){
    campos[index].style.border = "1px solid #F52E2E"
    spans[index].style.display = "block"
}

function removerError(index){
    campos[index].style.border = "1px solid #00C22B"
    spans[index].style.display = "none"
}

function nameValidacao(){
    if(campos[0].value.length < 3){
        setError(0)
    }
    else{
        removerError(0)
    }
}

function emailValidacao(){
    if(emailRegex.test(campos[1].value)){
        removerError(1)
    }else{
        setError(1)
    }
}

function telefoneValidacao(){
    if(regexTelefone.test(campos[2].value)){
        removerError(2)
    }else{
        setError(2)
    }
    
    campos[2].addEventListener("input", function(event) {
        let input = event.target
        let valor = input.value

        valor = valor.replace(/\D/g, "")

        if (valor.length > 0) {
             valor = "(" + valor; 
        } 
        if (valor.length > 3) { 
            valor = valor.slice(0, 3) + ") " + valor.slice(3); 
        } 
        if (valor.length > 10) { 
            valor = valor.slice(0, 10) + "-" + valor.slice(10); 
        } 
        
        input.value = valor;
    })
}

function mensagemValidacao(){
    if(campos[3].value.length == ""){
        setError(3)
    }
    else{
        removerError(3)
    }
}