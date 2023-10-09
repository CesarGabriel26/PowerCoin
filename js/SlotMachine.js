let Circle = document.querySelector('.Circle')
function SetSlotMachine(RealsCount = 3) {
    const html = `
        <div class="SlorMachine">
        <div class="Header">
            
        </div>

        <div class="display">
            <div class="slots">
                <div class="reel"></div>
                <div class="reel"></div>
                <div class="reel"></div>
                <div class="reel"></div>
                <div class="reel"></div>
            </div>
            
            <div class="Lever">
                <button class="Circle btn btn-success"></button>
                <div class="Trail"></div>
            </div>

        </div>


        <div class="Footer">
            <div class=" form-floating ">
                <input id="TotalBet" type="text" class=" form-control " placeholder="TotalBet">
                <label for="TotalBet">TotalBet</label>
            </div>

        </div>

    </div>
    `

    document.querySelector('.RightContainer').innerHTML = html
    Circle = document.querySelector('.Circle')

    Circle.addEventListener('click', () => {
        const reelsList = document.querySelectorAll('.slots > .reel');
    
        Circle.classList.add('Cliked')
        Circle.setAttribute('disabled','')
    
        setTimeout(() => {
            Circle.classList.remove('Cliked')
        }, 1500);
    
        Promise
    
            // Activate each reel, must convert NodeList to Array for this with spread operator
            .all([...reelsList].map((reel, i) => roll(reel, i)))
    
            // When all reels done animating (all promises solve)
            .then((deltas) => {
                // add up indexes
                deltas.forEach((delta, i) => indexes[i] = (indexes[i] + delta) % num_icons);
                // Win conditions
                if (indexes[0] == indexes[1] || indexes[1] == indexes[2] || indexes[2] == indexes[3] || indexes[3] == indexes[4]) {
                    const winCls = CheckAllWin()
                    document.querySelector(".slots").classList.add(winCls);
                    setTimeout(() => document.querySelector(".slots").classList.remove(winCls), 2000)
                }
                Circle.removeAttribute('disabled')
    
            });
    
    
    })
}

const iconMap = ["banana", "seven", "cherry", "plum", "orange", "bell", "bar", "lemon", "melon"],
    // Width of the icons
    icon_width = 119,
    // Height of one icon in the strip
    icon_height = 119,
    // Number of icons in the strip
    num_icons = 9,
    // Max-speed in ms for animating one icon down
    time_per_icon = 100,
    // Holds icon indexes
    indexes = [0, 0, 0, 0, 0];
 


const roll = (reel, offset = 0) => {
    // Minimum of 2 + the reel offset rounds
    const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);

    // Return promise so we can wait for all reels to finish
    return new Promise((resolve, reject) => {

        const style = getComputedStyle(reel),
            // Current background position
            backgroundPositionY = parseFloat(style["background-position-y"]),
            // Target background position
            targetBackgroundPositionY = backgroundPositionY + delta * icon_height,
            // Normalized background position, for reset
            normTargetBackgroundPositionY = targetBackgroundPositionY % (num_icons * icon_height);

        // Delay animation with timeout, for some reason a delay in the animation property causes stutter
        setTimeout(() => {
            // Set transition properties ==> https://cubic-bezier.com/#.41,-0.01,.63,1.09
            reel.style.transition = `background-position-y ${(8 + 1 * delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
            // Set background position
            reel.style.backgroundPositionY = `${backgroundPositionY + delta * icon_height}px`;
        }, offset * 150);

        // After animation
        setTimeout(() => {
            // Reset position, so that it doesn't get higher without limit
            reel.style.transition = `none`;
            reel.style.backgroundPositionY = `${normTargetBackgroundPositionY}px`;
            // Resolve this promise
            resolve(delta % num_icons);
        }, (8 + 1 * delta) * time_per_icon + offset * 150);

    });
};


function CheckAllWin() {
    if (indexes[0] == indexes[1] && indexes[1] == indexes[2] && indexes[2] == indexes[3] && indexes[3] == indexes[4]) {
        return "win2"
    } else {
        return "win1"
    }
}