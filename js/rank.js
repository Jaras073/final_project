const containerRank = document.querySelector('.game_rank_tab');

const rankPost = async () => {
    let url = 'http://localhost:3000/rank?_sort=point';

    const res = await fetch(url);
    const rank = await res.json();

    let template = '';
    rank.forEach(post => {
        template += `
        <table>
            <tbody>
                <tr>
                    <td class="game_rank_listHead">${post.name}</td>
                    <td class="game_rank_listHead">${post.point}</td>
                    <td class="game_rank_listHead">${post.time[0].min < 10 ? `0${post.time[0].min}` : post.time[0].min}:${post.time[0].sek < 10 ? `0${post.time[0].sek}` : post.time[0].sek}</td>
                </tr>
            </tbody>
        </table>
        `
      
        containerRank.innerHTML = template
    })
}

window.addEventListener('DOMContentLoaded', () => rankPost())

// export default rankPost