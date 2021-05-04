

const memory = {
    userName:"",
    divImg:"",
    card : 20,
    gridColumn: 5,
    gridRows: 4,
    checkedCard: 2,
    checkedCardTab:[],
    time:[],
    hiScores:[],
    date: new Date(),
    moveCount: 0,
    divBoard: null,
    click : true,
    matchinCard : 0, 
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

    // const {click, checkedCard, checkedCardTab, cardsImg, moveCount, userName, cardsPairs, card, hiScores} = memory

    if (memory.click && memory.checkedCard === '2') {
        
        if (!memory.checkedCardTab[0] || (memory.checkedCardTab[0].dataset.index !== e.target.dataset.index)){
            memory.checkedCardTab.push(e.target);
            e.target.style.backgroundImage = `url(${memory.cardsImg[e.target.dataset.cardRandom]})`;
            console.log(memory.checkedCardTab);
        }

        if (memory.checkedCardTab.length === parseInt(memory.checkedCard)) {
            memory.click = false;

            if (memory.checkedCardTab[0].dataset.cardRandom === memory.checkedCardTab[1].dataset.cardRandom) {
                setTimeout(() => deleteCard(), 500);
            } else {
                setTimeout(() => resetCard(), 500);
            }
            
            console.log(memory.checkedCardTab.length);
            memory.moveCount++;
        }
    
            const countner = memory.moveCount < 10 ? `0${memory.moveCount}` : `${memory.moveCount}`;
        
            divScore.innerText = `${memory.userName} : ${countner}`;
            console.log(`${memory.userName} zdobył ${memory.moveCount}`);
    }

    if (memory.click && memory.checkedCard === '3') {
        
        if (!memory.checkedCardTab[0] || (memory.checkedCardTab[0].dataset.index !== e.target.dataset.index)){
            memory.checkedCardTab.push(e.target);
            e.target.style.backgroundImage = `url(${memory.cardsImg[e.target.dataset.cardRandom]})`;
            console.log(memory.checkedCardTab);
        }

        if (memory.checkedCardTab.length === parseInt(memory.checkedCard)) {
            memory.click = false;

            if (memory.checkedCardTab[0].dataset.cardRandom === memory.checkedCardTab[1].dataset.cardRandom && memory.checkedCardTab[1].dataset.cardRandom === memory.checkedCardTab[2].dataset.cardRandom && memory.checkedCardTab[0].dataset.cardRandom === memory.checkedCardTab[2].dataset.cardRandom) {
                setTimeout(() => deleteCard({memory}), 500);
            } else {
                setTimeout(() => resetCard({memory}), 500);
            }
            
            console.log(memory.checkedCardTab.length);
            memory.moveCount++;
        }

            const countner = memory.moveCount < 10 ? `0${memory.moveCount}` : `${memory.moveCount}`;
        
            divScore.innerText = `${memory.userName} : ${countner}`;
            console.log(`${memory.userName} zdobył ${memory.moveCount}`);
    }

    const deleteCard = () =>{
        // const {checkedCardTab, card, cardsPairs, checkedCard, hiScores} = memory
        memory.checkedCardTab.forEach(el => {
            const emptyDiv = document.createElement("div");
            el.before(emptyDiv);
            el.remove();
        });
    
        memory.click = true;
        memory.checkedCardTab = [];
        // const {userName , moveCount} = memory
        // const hiScore = {
        //     name : memory.userName, 
        //     point : memory.moveCount, 
        //     data: memory.time.slice(-1)
        // }
    
        memory.cardsPairs++;
        if (memory.cardsPairs >= memory.card / parseInt(memory.checkedCard)) {
            // memory.hiScores.push(hiScore);
            createRank();
            // console.log(memory.time[-1]);
            alert("Wygrałeś");
            clearInterval(timer)
            location.reload()
        }
        console.log(memory.hiScores);
    }

    
    const resetCard = () => {
        // const {checkedCardTab, click} = memory
        memory.checkedCardTab.forEach(el => el.style.backgroundImage = "");
        memory.checkedCardTab = [];
        memory.click = true;
    }
}

const startGame = () => {
        
        // memory.userName = prompt("podaj imię")
        // memory.card = prompt("podaj ile kart", 20)
        // memory.gridRows = prompt("podaj ile rzędów", 4)
        // memory.gridColumn = prompt("podaj ile kolumn", 5)
        // memory.checkedCard = prompt("ile kart zaznaczonych", 2)
        memory.userName = document.querySelector('#userName').value;
        memory.card = document.querySelector('#card').value;
        memory.gridRows = document.querySelector('#gridRows').value;
        memory.gridColumn = document.querySelector('#gridColumn').value;
        memory.checkedCard = document.querySelector('#checkedCard').value;
        memory.gameBoard = document.querySelector(".game_board");
        memory.gameBoard.innerHTML = "";
        memory.gameBoard.style.gridTemplateColumns = `repeat(${memory.gridColumn}, 1fr)`
        memory.gameBoard.style.gridTemplateRows = `repeat(${memory.gridRows}, 1fr)`

        divScore = document.querySelector(".game_score");
        divScore.innerHTML = `${memory.userName} : ${memory.moveCount}`;
        
        cards = [];

        for (let i=0; i<parseInt(memory.card); i++) {
            cards.push(Math.floor(i/`${memory.checkedCard}`));
            // console.log(this.cards);
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
            // console.log(cards);

            card.addEventListener("click", e => cardClick({memory, e}));
        }
        startTimer()
    }

document.addEventListener("DOMContentLoaded", () => {
    const btnStart = document.querySelector(".game_btn_start");
    btnStart.addEventListener("click", (e) => startGame(memory), rankPost);
    
});