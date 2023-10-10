let formLog = document.querySelector('formLog')

formLog.addEventListener('submit',(e)=>{
    e.preventDefault()

    let NomeDeUsuario = formLog.querySelector("#NomeDeUsuario")
    let Senha = formLog.querySelector("#Senha")

    if (Senha.value == "" || NomeDeUsuario.value == ""){
        return
    }else{
        return true
    }

})