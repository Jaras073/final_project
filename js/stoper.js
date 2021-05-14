const gameStoper = document.querySelector('.game_timer_counter');

let seconds = 0;
let minutes = 0;
let stoper;

const run = () =>{

    seconds++
    
    if(seconds == 60){
        seconds = 0;
        minutes++
    }
    
    const s = `
    ${minutes < 10 ? `0${minutes}` : minutes} 
    : 
    ${seconds< 10 ? `0${seconds}` : seconds}
    `
    gameStoper.innerHTML = s;
    
        memory.stoper.push({
            min: minutes,
            sek: seconds
        })
}
const startStoper = (memory) =>{
    stoper = setInterval(run, 1000)
}

