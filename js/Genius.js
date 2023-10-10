var SelectedCels = []
var CurrentCount = 0

var GeniusButtons

function SetGenius() {
    const html = `
    <div class="Genius">

        <div class="GeniusDisplay">
            <div class="separator">
                <span class="GeniusButton red" dara-val="red"></span>
                <span class="GeniusButton green" dara-val="green"></span>
            </div>
            <div class="separator">
                <span class="GeniusButton blue" dara-val="blue"></span>
                <span class="GeniusButton yellow" dara-val="yellow"></span>
            </div>

        </div>

    </div>
    `


    document.querySelector('.RightContainer').innerHTML = html


    GeniusButtons = document.querySelectorAll('.GeniusButton')

    GeniusButtons.forEach(GeniusButton => {

        GeniusButton.addEventListener('click',()=>{
            GeniusButton.classList.add('Clicked')
            setTimeout(() => {
                GeniusButton.classList.remove('Clicked')
            }, 250);
            
            if (GeniusButton.getAttribute('dara-val') == SelectedCels[CurrentCount]) {
                CurrentCount += 1

                if (CurrentCount == SelectedCels.length) {
                    SelectedCels = []
                    CurrentCount = 0
                    
                    setTimeout(() => {
                        Start()
                    }, 500);
                }

            }else {
                SelectedCels = []
                CurrentCount = 0
                setTimeout(() => {
                    Start()
                }, 500);
            }

        })
    })

    Start()

}

const delay = async (ms = 1000) =>
new Promise(resolve => setTimeout(resolve, ms))

SetGenius()



async function Start() {
    var lg = 4

    for (let j = 0; j < lg; j++) {
        var i = parseInt(Math.random() * 4)

        GeniusButtons[i].classList.add('Clicked')
        setTimeout(() => {
            GeniusButtons[i].classList.remove('Clicked')
        }, 800);

        SelectedCels.push(GeniusButtons[i].getAttribute('dara-val'))
        
        await delay(1000)
    }

    //console.log(SelectedCels)
}