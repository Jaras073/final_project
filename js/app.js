const memory = {
    userName: '',
    card : 20,
    checkedCard: 2,
    checkedCardTab: [],
    min: 1,
    stoper:[],
    date: new Date(),
    moveCount: '',
    gameBoard: null,
    click : true,
    cardsPairs : 0,
    cardsImg : [ 
        "img/1.svg",
        "img/2.svg",
        "img/3.svg",
        "img/4.svg",
        "img/5.svg",
        "img/6.svg",
        "img/7.svg",
        "img/8.svg",
        "img/9.svg",
        "img/10.svg",
        "img/11.svg",
        "img/12.svg",
        "img/13.svg",
        "img/14.svg",
        "img/15.svg",
        "img/16.svg",
        "img/17.svg",
        "img/18.svg",
        "img/19.svg",
        "img/20.svg",
        "img/21.svg",
        "img/22.svg",
        "img/23.svg",
        "img/24.svg",
        "img/25.svg",
        "img/26.svg",
        "img/27.svg",
        "img/28.svg",
        "img/29.svg",
        "img/30.svg",
    ],
}

const cardClick = ({memory, e}) => {

    if (memory.click && memory.checkedCard === '2') {
        
        if (!memory.checkedCardTab[0] || (memory.checkedCardTab[0].dataset.index !== e.target.dataset.index)){
            memory.checkedCardTab.push(e.target);
            e.target.style.backgroundImage = `url(${memory.cardsImg[e.target.dataset.cardRandom]})`;
        }

        if (memory.checkedCardTab.length === parseInt(memory.checkedCard)) {
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

    if (memory.click && memory.checkedCard === '3') {
        
        if (!memory.checkedCardTab[0] || (memory.checkedCardTab[0].dataset.index !== e.target.dataset.index)){
            memory.checkedCardTab.push(e.target);
            e.target.style.backgroundImage = `url(${memory.cardsImg[e.target.dataset.cardRandom]})`;
        }

        if (memory.checkedCardTab.length === parseInt(memory.checkedCard)) {
            memory.click = false;

            if (memory.checkedCardTab[0].dataset.cardRandom === memory.checkedCardTab[1].dataset.cardRandom && memory.checkedCardTab[1].dataset.cardRandom === memory.checkedCardTab[2].dataset.cardRandom && memory.checkedCardTab[0].dataset.cardRandom === memory.checkedCardTab[2].dataset.cardRandom) {
                setTimeout(() => deleteCard({memory}), 500);
            } else {
                setTimeout(() => resetCard({memory}), 500);
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
            createRank();
            clearInterval(stoper)
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
        memory.checkedCardTab.forEach(el => el.style.backgroundImage = "");
        memory.checkedCardTab = [];
        memory.click = true;
    }
}

const startGame = () => {    

    memory.userName = document.querySelector('#userName').value;
    memory.card = document.querySelector('#card').value;
    memory.checkedCard = document.querySelector('#checkedCard').value;
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

    if(memory.card >= 0 && memory.card <= 9 && memory.checkedCard == 3 || memory.card > 90 && memory.checkedCard == 3){
        memory.gameBoard.classList.add('winner_board');
        const txt = document.createElement('div');
        txt.innerHTML = 'Powinieneś wybrać z zakresu pomiędzy 9 a 90 kart :)';
        document.body.append(txt);
        txt.classList.add('winner_info')
        gridColumn = 1
        gridRows = 1
        setTimeout(() => {
            location.reload()
        }, 3000);
    }

    if(memory.checkedCard < 2 || memory.checkedCard > 3){
        memory.gameBoard.classList.add('winner_board');
        const txt = document.createElement('div');
        txt.innerHTML = 'Powinieneś wybrać z zakresu pomiędzy 2 a 3:)';
        document.body.append(txt);
        txt.classList.add('winner_info')
        gridColumn = 1
        gridRows = 1
        setTimeout(() => {
            location.reload()
        }, 3000);
    }

    if(memory.card >= 10 && memory.card <= 16 && memory.checkedCard == 2){
        gridColumn = 4
        gridRows = 4
    }else if(memory.card >= 17 && memory.card <= 24 && memory.checkedCard == 2){
        gridColumn = 6
        gridRows = 4
    }else if(memory.card >= 25 && memory.card <= 36 && memory.checkedCard == 2){
        gridColumn = 6
        gridRows = 6
    }else if(memory.card >= 37 && memory.card <= 49 && memory.checkedCard == 2){
        gridColumn = 7
        gridRows = 7
    }else if(memory.card >= 50 && memory.card <= 60 && memory.checkedCard == 2){
        gridColumn = 8
        gridRows = 8
    }else if(memory.card >= 9 && memory.card <= 18 && memory.checkedCard == 3){
        gridColumn = 6
        gridRows = 3
    }else if(memory.card >= 19 && memory.card <= 24 && memory.checkedCard == 3){
        gridColumn = 6
        gridRows = 4
    }else if(memory.card >= 25 && memory.card <= 36 && memory.checkedCard == 3){
        gridColumn = 6
        gridRows = 6
    }else if(memory.card >= 37 && memory.card <= 49 && memory.checkedCard == 3){
        gridColumn = 7
        gridRows = 7
    }else if(memory.card >= 50 && memory.card <= 64 && memory.checkedCard == 3){
        gridColumn = 8
        gridRows = 8
    }else if(memory.card >= 65 && memory.card <= 72 && memory.checkedCard == 3){
        gridColumn = 9
        gridRows = 8
    }else if(memory.card >= 73 && memory.card <= 81 && memory.checkedCard == 3){
        gridColumn = 9
        gridRows = 9
    }else if(memory.card >= 82 && memory.card <= 90 && memory.checkedCard == 3){
        gridColumn = 10
        gridRows = 9
    }

    memory.gameBoard.style.gridTemplateColumns = `repeat(${gridColumn}, 1fr)`
    memory.gameBoard.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`

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

        card.addEventListener("click", e => cardClick({memory, e}));
    };   
        startStoper();
}

document.addEventListener("DOMContentLoaded", () => {
    const btnGameStartStoper = document.querySelector(".game_btn_startStoper");
    btnGameStartStoper.addEventListener("click", (e) => startGame(), rankPost);
    
});

const btnStoper = () => {
    document.querySelector('.game_set_stoper').classList.toggle('active');
    document.querySelector('.game_set_timer').classList.remove('active');
    document.querySelector('.game_set') ? document.querySelector('.game_set').classList.add('active') : document.querySelector('.game_set').classList.remove('active');
}
const btnStartStoper = document.querySelector(".game_btn_stoper");
        btnStartStoper.addEventListener("click", () => btnStoper());

const btnTimer = () => {
    document.querySelector('.game_set_timer').classList.toggle('active');
    document.querySelector('.game_set_stoper').classList.remove('active')
    document.querySelector('.game_set') ? document.querySelector('.game_set').classList.add('active') : document.querySelector('.game_set').classList.remove('active');

}

const btnStartTimer = document.querySelector(".game_btn_timer");
    btnStartTimer.addEventListener("click", () => btnTimer());


const btnReload = () => {
    if(memory.gameBoard){
        memory.gameBoard.classList.add('winner_board');
        const txt = document.createElement('div');
        txt.innerHTML = 'Resetujemy ustawienia :)';
        document.body.append(txt);
        txt.classList.add('winner_info')
        setTimeout(() => {
            location.reload()
        }, 3000);
    }else{
        location.reload()
    }
}

const btnReset = document.querySelector('.game_btn_reset');
    btnReset.addEventListener('click',() => btnReload())