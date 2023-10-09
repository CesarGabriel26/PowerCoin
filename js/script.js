let GameItems = document.querySelectorAll(".GameItem")

GameItems.forEach(GameItem => {
    GameItem.addEventListener("click",(e)=>{

        GameItems.forEach(Item => {
            Item.classList.remove('Active')
        })
        
        e.target.classList.add('Active')
    })
})