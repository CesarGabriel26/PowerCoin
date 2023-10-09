let GameItems = document.querySelectorAll(".GameItem")

GameItems.forEach(GameItem => {
    GameItem.addEventListener("click",(e)=>{

        GameItems.forEach(Item => {
            Item.classList.remove('Active')
        })
        
        e.target.classList.add('Active')
    })
})


var User = JSON.parse(localStorage.getItem("UserData")) || null

if (User == null) {
    document.querySelector(".links").innerHTML = `
    <a onclick="LoadPage('html/login.html')"  title="Minha Carteira" class="nav-link slide-nav-link" >
        Entrar
    </a>
    <a href="" title="Minha Carteira" class="Carteira nav-link slide-nav-link" >
        Cadastrar-se
    </a>
    `
}else {
    document.querySelector(".links").innerHTML = `
    <a href="" title="Minha Carteira" class=" nav-link slide-nav-link" >
        <span class="material-symbols-outlined">account_balance_wallet</span>
    </a>
    `
}


function LoadPage(page) {
    document.querySelector("#Frame").src = page
}