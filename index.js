const btns = document.querySelectorAll('.btn')
const userScore = document.querySelector('.score')
let time = 10
let score = 0
let birinchiEl = null

function startGame(){

    btns.forEach(button => {
        button.addEventListener('click', () => {
            new Audio('./music/button-click.mp3').play()
            if(birinchiEl){
                if(birinchiEl !== button && birinchiEl.textContent === button.textContent){
                    button.style.backgroundColor = 'red'
                    button.remove()
                    score ++
                    userScore.textContent = score
                    new Audio ('./music/success.mp3').play()
                }else{
                    birinchiEl.style.backgroundColor = 'green'
                }
    
                birinchiEl = null
            }else{
                button.style.backgroundColor = "red"
                // button.style.box-shadow = "0px"
                birinchiEl = button
            }
        })
    })
    
    const userTime = document.querySelector('.time')
    
    
    const timer = setInterval(() =>{
        time--;
        userTime.textContent = time;
        // new Audio("./music/timer-sound.mp3").play()
            
            if(time > 0){
                if(time >= 7 & time <= 10){
                    userTime.style.color = "green"
                }else if (time <=7 && time >=4){
                    userTime.style.color = "yellow"
                    container.style=`-webkit-box-shadow: -4px -2px 36px 22px rgba(255,238,0,1);
                    -moz-box-shadow: -4px -2px 36px 22px rgba(255,238,0,1);
                    box-shadow: -4px -2px 36px 22px rgba(255,238,0,1);`
                }else if (time <= 3 & time >=0){
                    userTime.style.color = "red"
                    container.style=`-webkit-box-shadow: -4px -2px 36px 22px rgba(255,0,0,0.57);
                    -moz-box-shadow: -4px -2px 36px 22px rgba(255,0,0,0.57);
                    box-shadow: -4px -2px 36px 22px rgba(255,0,0,0.57);`
                }
            }else{
                clearInterval(timer)
                new Audio("./music/game-over.mp3").play()
                btns.disabled = true;
            }
        }, 1000)
}

startGame()
const restart = document.querySelector('.restart')

restart.addEventListener('click', () =>{
    startGame()
})
