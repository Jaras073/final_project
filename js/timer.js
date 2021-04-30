const gameTimer = document.querySelector('.game_timer');

let seconds = 0;
let minutes = 0;
let timer;

const run = () =>{

    seconds++
    
    if(seconds == 60){
        seconds = 0;
        minutes++
    }
    
    const t = `
    ${minutes < 10 ? `0${minutes}` : minutes} 
    : 
    ${seconds< 10 ? `0${seconds}` : seconds}
    `

    gameTimer.innerHTML = t;
    
        memory.time.push({
            min: minutes,
            sek: seconds
        })
}
const startTimer = (memory) =>{
    timer = setInterval(run, 1000)
}
// export default startTimer




