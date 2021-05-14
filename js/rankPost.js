const containerRank = document.querySelector('.game_rank_tabTbody');

const rankPost = async () => {
    let url = 'http://localhost:3000/rank?_sort=point';

    const res = await fetch(url);
    const rank = await res.json();

    let template = '';
    rank.forEach(post => {
        template += `
                <tr>
                    <td class="game_rank_listRank" scope="row"></td>
                    <td class="game_rank_listName">${post.name}</td>
                    <td class="game_rank_listPunkt">${post.point}</td>
                    <td class="game_rank_listTime">
                    ${post.stoper[0].min < 10 ? `0${post.stoper[0].min}` : post.stoper[0].min} 
                    : 
                    ${post.stoper[0].sek < 10 ? `0${post.stoper[0].sek}` : post.stoper[0].sek}
                    </td>
                </tr>
        `
        containerRank.innerHTML = template
    })
}

window.addEventListener('DOMContentLoaded', () => rankPost())