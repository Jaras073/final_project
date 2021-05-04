const createRank = async () => {
    const hiScore = {
        name : memory.userName, 
        point : memory.moveCount, 
        data : memory.date.toLocaleString(),
        time: memory.time.slice(-1)
    }
    console.log(memory.userName);
    await fetch('http://localhost:3000/rank', {
        method: 'POST',
        body: JSON.stringify(hiScore),
        headers: {'Content-Type':'application/json'}
    });
}

// export default createRank

