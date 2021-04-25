const memory = {
    name:'',
    card : 20,
    gridColumn: 5,
    gridRows: 4,
    checkedCard: 2,
    moveCount:0,
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
    //TODO TODO_1 - 1/3 Losowanie
    startGame() {
        this.name = prompt('podaj imię')
        this.card = prompt('podaj ile kart', 20)
        this.gridRows = prompt('podaj ile rzędów', 4)
        this.gridColumn = prompt('podaj ile kolumn', 5)
        this.checkedCard = prompt('ile kart zaznaczonych', 2)
        this.gameBoard = document.querySelector(".game_board");
        
        this.gameBoard.style.gridTemplateColumns = `repeat(${this.gridColumn}, 1fr)`
        this.gameBoard.style.gridTemplateRows = `repeat(${this.gridRows}, 1fr)`

        this.divScore = document.querySelector(".game_score");
        this.divName = document.querySelector('.game_name');
        this.divScore.innerHTML = `${this.name} : ${this.moveCount}`;
        
        this.cards = [];

        for (let i=0; i<this.card; i++) {
            this.cards.push(Math.floor(i/`${this.checkedCard}`));
            // console.log(this.cards);
        }

        for (let i=this.card - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random()*i);
            const number = this.cards[i];
            this.cards[i] = this.cards[randomIndex] 
            this.cards[randomIndex] = number;
        }

        for (let i=0; i<this.card; i++) {
            const card = document.createElement("div");
            card.classList.add("game_card");
            this.gameBoard.appendChild(card);

            card.dataset.cardRandom = this.cards[i];
            card.dataset.index = i;
         
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btnStart = document.querySelector(".game_btn_start");
    btnStart.addEventListener("click", () => memory.startGame());
});