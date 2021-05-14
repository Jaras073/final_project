let hiScore;
const createRank = async () => {
    hiScore = {
        name : memory.userName, 
        point : memory.moveCount, 
        data : memory.date.toLocaleString(),
        stoper: memory.stoper.slice(-1)
    }

    await fetch('http://localhost:3000/rank', {
        method: 'POST',
        body: JSON.stringify(hiScore),
        headers: {'Content-Type':'application/json'}
    });
}
