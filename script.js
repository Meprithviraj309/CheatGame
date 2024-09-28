const container = document.getElementById('box-container');
const gameOverText = document.getElementById('game-over');
const gameOverButtons = document.getElementById('game-over-buttons');
const cheatCheckbox = document.getElementById('cheat-checkbox');

let boxes = [];
let blackBoxIndex = Math.floor(Math.random() * 20);
let clickedCount = 0;

function closeGame() {
    window.close();
}

function resetGame() {
    container.innerHTML = '';
    boxes = [];
    blackBoxIndex = Math.floor(Math.random() * 20);
    clickedCount = 0;
    gameOverText.style.display = 'none';
    gameOverButtons.style.display = 'none';
    createBoxes();
}

function createBoxes() {
    for (let i = 0; i < 20; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.addEventListener('click', () => handleBoxClick(i));
        container.appendChild(box);
        boxes.push(box);
    }
}

function handleBoxClick(index) {
    if (gameOverText.style.display === 'block') {
        return;
    }

    if (cheatCheckbox.checked) {
        boxes[index].style.backgroundImage = 'url("th (1).jpeg")';
        boxes[index].style.backgroundSize = 'cover';
        boxes[index].style.backgroundPosition = 'center';
        gameOverText.style.display = 'block';
        gameOverButtons.style.display = 'block';
        return;
    }

    if (index === blackBoxIndex) {
        boxes[index].style.backgroundImage = 'url("th (1).jpeg")';
        boxes[index].style.backgroundSize = 'cover';
        boxes[index].style.backgroundPosition = 'center';
        gameOverText.style.display = 'block';
        gameOverButtons.style.display = 'block';
        return;
    }

    boxes[index].style.backgroundImage = 'url("th.jpeg")';
    boxes[index].style.backgroundSize = 'cover';
    boxes[index].style.backgroundPosition = 'center';
    clickedCount++;

    if (clickedCount >= 2 && cheatCheckbox.checked) {
        boxes[blackBoxIndex].style.backgroundImage = 'url("th (1).jpeg")';
        boxes[blackBoxIndex].style.backgroundSize = 'cover';
        boxes[blackBoxIndex].style.backgroundPosition = 'center';
        gameOverText.style.display = 'block';
        gameOverButtons.style.display = 'block';
    }
}

resetGame();
