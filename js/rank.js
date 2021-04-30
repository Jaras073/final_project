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
                    <td class="game_rank_list">${post.name}</td>
                    <td class="game_rank_list">${post.point}</td>
                    <td class="game_rank_list">${post.data[0].min < 10 ? `0${post.data[0].min}` : post.data[0].min}:${post.data[0].sek < 10 ? `0${post.data[0].sek}` : post.data[0].sek}</td>
                </tr>
            </tbody>
        </table>
        `
      
        containerRank.innerHTML = template
    })
}

window.addEventListener('DOMContentLoaded', () => rankPost())

// export default rankPost