const gameTimer = document.querySelector('.game_timer_counter');

const startTimer = () =>{
    let time = `${memory.min*60}`;

    timerInterval = setInterval(()=>{

        let minutesT = Math.floor(time / 60);
        let secondsT = time % 60;

        if(secondsT < 15 && minutesT == 0){
            gameTimer.style.color='rgb(209, 5, 5)';
        }
        
        if(secondsT == '0' && minutesT == '0'){
            clearInterval(timerInterval);
            memory.gameBoard.classList.add('winner_board');
            const txt = document.createElement('div');
            txt.innerHTML = 'Niestety koniec czasu !!!';
            document.body.append(txt);
            txt.classList.add('winner')
            setTimeout(() => {
                location.reload()
            }, 3000);
        }
  
        const t = `
        ${minutesT < 10 ? `0${minutesT}` : minutesT} 
        : 
        ${secondsT< 10 ? `0${secondsT}` : secondsT}
        `
        
        gameTimer.innerHTML = t;
        
        time--

    }, 1000)
}
