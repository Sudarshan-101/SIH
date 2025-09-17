const mockData = {
    basketball: {
        id: 'basketball',
        name: 'Basketball',
        players: [
            { id: 1, name: 'Sudarshan Gaikhe', age: 19, points: 5200, bio: 'Aspiring forward with a knack for three-pointers.', photo: 'https://placehold.co/100x100/A078FF/ffffff?text=SG' },
            { id: 2, name: 'Rohit Matsagar', age: 19, points: 4850, bio: 'Seasoned point guard and team captain.', photo: 'https://placehold.co/100x100/80FFFF/000000?text=RM' },
            { id: 3, name: 'Surbhi', age: 22, points: 4500, bio: 'Rising star known for his defensive blocks.', photo: 'https://placehold.co/100x100/FFD8BE/000000?text=S' },
            { id: 4, name: 'Ayushi', age: 27, points: 3900, bio: 'Dynamic shooting guard with explosive speed.', photo: 'https://placehold.co/100x100/FF6B6B/ffffff?text=A' },
            { id: 5, name: 'Chaitanya', age: 31, points: 3500, bio: 'Experienced center, dominates the paint.', photo: 'https://placehold.co/100x100/FFC999/000000?text=C' },
        ],
    },
    Football: {
        id: 'Football',
        name: 'Football',
        players: [
            { id: 6, name: 'Darshan', age: 18, points: 6100, bio: 'Midfielder with exceptional ball control.', photo: 'https://placehold.co/100x100/B8FF6B/000000?text=D' },
            { id: 7, name: 'Jayesh', age: 20, points: 5800, bio: 'Top scorer and natural-born leader.', photo: 'https://placehold.co/100x100/6B9CFF/ffffff?text=J' },
            { id: 8, name: 'Kalpesh', age: 19, points: 5500, bio: 'Defensive powerhouse, rarely gets past him.', photo: 'https://placehold.co/100x100/FF5C9D/ffffff?text=K' },
            { id: 9, name: 'Atharva', age: 16, points: 4900, bio: 'Agile winger, specializes in crosses.', photo: 'https://placehold.co/100x100/FFC107/000000?text=A' },
            { id: 10, name: 'Sanket', age: 19, points: 4200, bio: 'Goalkeeper with an incredible save rate.', photo: 'https://placehold.co/100x100/C198E4/ffffff?text=S' },
        ],
    },
    tennis: {
        id: 'tennis',
        name: 'Tennis',
        players: [
            { id: 11, name: 'Nishant', age: 21, points: 7200, bio: 'Dominates with a powerful forehand.', photo: 'https://placehold.co/100x100/FF78A0/ffffff?text=N' },
            { id: 12, name: 'Pranav', age: 22, points: 6900, bio: 'Strategic player with a fantastic serve.', photo: 'https://placehold.co/100x100/E86850/ffffff?text=P' },
            { id: 13, name: 'Manthan', age: 26, points: 6500, bio: 'Consistent and precise, a true professional.', photo: 'https://placehold.co/100x100/98C8E8/000000?text=M' },
            { id: 14, name: 'Karan', age: 18, points: 5800, bio: 'Net player with incredible volley skills.', photo: 'https://placehold.co/100x100/6D69F2/ffffff?text=K' },
            { id: 15, name: 'Nikhil', age: 19, points: 5100, bio: 'All-around player, hard to beat.', photo: 'https://placehold.co/100x100/A0E8AF/000000?text=N' },
        ],
    },
};

let selectedGameId = 'basketball';

const crownSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown w-8 h-8 crown-svg"><path d="m2 4 3 12h14l3-12-6 8-4-8-4 8-6-8z" /></svg>`;
const medalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal w-8 h-8 medal-svg"><path d="M7.22 10.22a1 1 0 0 1-.36 1.48L5 12 4.14 12.3a1 1 0 0 1-1.48-.36L2 11.23l.11-.27a.5.5 0 0 1 .5-.2L3 11l.13-.1a.5.5 0 0 1 .2-.5l.08-.12a1 1 0 0 1 .36-1.48L5 8l1.72-.86A1 1 0 0 1 7.22 10.22z" /><path d="M11.5 2a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 11.5 2z" /><path d="M12 2v2" /><path d="M12 21a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 21z" /><path d="M12 21v2" /><path d="M12 2v2" /><path d="M12 21v2" /><path d="M12 21a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 21z" /><path d="M12 21v2" /><path d="M12 2v2" /><path d="M12 21v2" /><path d="M12 21a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 21z" /><path d="M12 21v2" /></svg>`;

function createPlayerCard(player, rank, gameName) {
    const card = document.createElement('div');
    const isTopThree = rank <= 3;
    card.className = `
        flex flex-col md:flex-row items-center space-x-0 md:space-x-4 p-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.01]
        ${isTopThree ? 'bg-gradient-gold text-gray-900 border-4 border-yellow-200' : 'bg-white border border-gray-200'}
    `;

    const rankClasses = isTopThree ? 'bg-yellow-800 text-white' : 'bg-indigo-600 text-white';
    const nameClasses = isTopThree ? 'text-gray-900' : 'text-gray-900';
    const textClasses = isTopThree ? 'text-gray-700' : 'text-gray-500';
    const bioClasses = isTopThree ? 'text-gray-700' : 'text-gray-500';
    const pointsClasses = isTopThree ? 'text-gray-900' : 'text-indigo-600';
    const pointsLabelClasses = isTopThree ? 'text-gray-800' : 'text-gray-600';

    card.innerHTML = `
        <div class="flex flex-1 items-center space-x-4 w-full">
            <div class="flex-shrink-0 relative w-12 h-12 md:w-16 md:h-16">
                <img class="rounded-full w-full h-full object-cover border-2 border-white/50 shadow-md"
                        src="${player.photo}"
                        alt="Profile of ${player.name}"
                        onerror="this.src='https://placehold.co/100x100/A078FF/ffffff?text=Player';">
                <div class="absolute bottom-0 right-0 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm md:text-base ${rankClasses}">
                    ${rank}
                </div>
            </div>
            <div class="flex-1 min-w-0">
                <h3 class="text-lg md:text-xl font-bold ${nameClasses}">${player.name}</h3>
                <p class="text-sm md:text-base ${textClasses}">${player.age} years old</p>
                <p class="bio-text text-xs md:text-sm mt-1 overflow-hidden overflow-ellipsis ${bioClasses}">${player.bio}</p>
            </div>
        </div>
        <div class="flex-shrink-0 mt-4 md:mt-0 md:ml-auto w-full md:w-auto text-center md:text-right">
            <p class="text-lg md:text-xl font-extrabold ${pointsClasses}">${player.points}</p>
            <p class="text-xs md:text-sm font-semibold ${pointsLabelClasses}">Points</p>
        </div>
    `;
    if (rank === 1) {
        const pointsDiv = card.querySelector('.flex-shrink-0.md\\:ml-auto');
        pointsDiv.insertAdjacentHTML('afterend', crownSvg);
    } else if (rank > 1 && rank <= 3) {
        const pointsDiv = card.querySelector('.flex-shrink-0.md\\:ml-auto');
        pointsDiv.insertAdjacentHTML('afterend', medalSvg);
    }
    return card;
}

function renderLeaderboard() {
    const container = document.getElementById('app-container');
    container.innerHTML = '';

    const selectedGame = mockData[selectedGameId];
    const sortedPlayers = [...selectedGame.players].sort((a, b) => b.points - a.points);

    const headerHtml = `
        <h1 class="text-4xl sm:text-5xl font-extrabold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-800">
            Global Leaderboards
        </h1>
        <p class="text-center text-gray-500 mb-8 max-w-lg mx-auto">
            See who's at the top of their game. Rankings are based on total points.
        </p>
    `;
    container.insertAdjacentHTML('beforeend', headerHtml);

    const tabsContainer = document.createElement('div');
    tabsContainer.className = "flex justify-center flex-wrap gap-4 mb-8";
    Object.values(mockData).forEach(game => {
        const button = document.createElement('button');
        button.textContent = game.name;
        button.className = `
            px-6 py-2 rounded-full font-semibold transition-colors duration-300 transform
            ${selectedGameId === game.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
        `;
        button.addEventListener('click', () => {
            selectedGameId = game.id;
            renderLeaderboard();
        });
        tabsContainer.appendChild(button);
    });
    container.appendChild(tabsContainer);

    const headingHtml = `<h2 class="text-3xl font-bold text-gray-800 mb-6">${selectedGame.name} Ranking</h2>`;
    container.insertAdjacentHTML('beforeend', headingHtml);

    const leaderboardList = document.createElement('div');
    leaderboardList.className = "space-y-4";
    if (sortedPlayers.length > 0) {
        sortedPlayers.forEach((player, index) => {
            const playerCard = createPlayerCard(player, index + 1, selectedGame.name);
            leaderboardList.appendChild(playerCard);
        });
    } else {
        leaderboardList.innerHTML = `<div class="text-center text-gray-500 py-10">No players found for this game.</div>`;
    }
    container.appendChild(leaderboardList);
}

document.addEventListener('DOMContentLoaded', renderLeaderboard);