const cardClickTimer = ({memory, e}) => {

    if(memory.click){

        if (!memory.checkedCardTab[0] || (memory.checkedCardTab[0].dataset.index !== e.target.dataset.index)){
            memory.checkedCardTab.push(e.target);
            e.target.style.backgroundImage = `url(${memory.cardsImg[e.target.dataset.cardRandom]})`;
        }

        if (memory.checkedCardTab.length === 2) {
            memory.click = false;

            if (memory.checkedCardTab[0].dataset.cardRandom === memory.checkedCardTab[1].dataset.cardRandom) {
                setTimeout(() => deleteCard(), 500);
            } else {
                setTimeout(() => resetCard(), 500);
            }
            
            memory.moveCount++;
        }
            const countner = memory.moveCount < 10 ? `0${memory.moveCount}` : `${memory.moveCount}`;
        
            divScore.innerText = `${countner}`;
    }
    
    const deleteCard = () =>{

        memory.checkedCardTab.forEach(el => {
            const emptyDiv = document.createElement("div");
            el.before(emptyDiv);
            el.remove();
        });
    
        memory.click = true;
        memory.checkedCardTab = [];
        memory.cardsPairs++;

        if (memory.cardsPairs >= memory.card / parseInt(memory.checkedCard)) {

            clearInterval(timerInterval)
            memory.gameBoard.classList.add('winner_board');
            const txt = document.createElement('div');
            txt.innerHTML = 'Gratulacje wygraleś !!!';
            document.body.append(txt);
            txt.classList.add('winner')
            setTimeout(() => {
                location.reload()
            }, 3000);
        }
    }
 
    const resetCard = () => {
        // const {checkedCardTab, click} = memory
        memory.checkedCardTab.forEach(el => el.style.backgroundImage = "");
        memory.checkedCardTab = [];
        memory.click = true;
    }
}

const startTimerGame = () => {
    memory.userName = document.querySelector('#userName').value;
    memory.card = document.querySelector('#cardTimer').value;
    memory.min = document.querySelector('#game_time_minutes').value;
    memory.gameBoard = document.querySelector(".game_board");
    memory.gameBoard.innerHTML = "";

    if(memory.card >= 0 && memory.card <= 9 && memory.checkedCard == 2 || memory.card > 60 && memory.checkedCard == 2){
        memory.gameBoard.classList.add('winner_board');
        const txt = document.createElement('div');
        txt.innerHTML = 'Powinieneś wybrać z zakresu pomiędzy 10 a 60 kart :)';
        document.body.append(txt);
        txt.classList.add('winner_info')
        gridColumn = 1
        gridRows = 1
        setTimeout(() => {
            location.reload()
        }, 3000);
    }

    if(memory.card >= 10 && memory.card <= 16){
        gridColumnTime = 4
        gridRowsTime = 4
    }else if(memory.card >= 17 && memory.card <= 24){
        gridColumnTime = 6
        gridRowsTime = 4
    }else if(memory.card >= 25 && memory.card <= 36){
        gridColumnTime = 6
        gridRowsTime = 6
    }else if(memory.card >= 37 && memory.card <= 49){
        gridColumnTime = 7
        gridRowsTime = 7
    }else if(memory.card >= 50 && memory.card <= 60){
        gridColumnTime = 8
        gridRowsTime = 8
    }

    memory.gameBoard.style.gridTemplateColumns = `repeat(${gridColumnTime}, 1fr)`
    memory.gameBoard.style.gridTemplateRows = `repeat(${gridRowsTime}, 1fr)`

    divScore = document.querySelector(".game_score_counter");
    divScore.innerHTML = `${memory.moveCount}`;

    divUserName = document.querySelector(".game_name_helloName");
    divUserName.innerHTML = `${memory.userName}`;
    

    cards = [];

    for (let i=0; i<parseInt(memory.card); i++) {
        cards.push(Math.floor(i/`${memory.checkedCard}`));
    }

    for (let i=parseInt(memory.card) - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random()*i);
        const number = cards[i];
        cards[i] = cards[randomIndex] 
        cards[randomIndex] = number;
    }

    for (let i=0; i<memory.card; i++) {
        const card = document.createElement("div");
        card.classList.add("game_card");
        memory.gameBoard.appendChild(card);

        card.dataset.cardRandom = cards[i];
        card.dataset.index = i;

        card.addEventListener("click", e => cardClickTimer({memory, e}));
    };
        startTimer(); 
}

document.addEventListener("DOMContentLoaded", () => {
    const btnGameStartTimer = document.querySelector(".game_btn_startTimer");
    btnGameStartTimer.addEventListener("click", (e) =>startTimerGame());
    
});
