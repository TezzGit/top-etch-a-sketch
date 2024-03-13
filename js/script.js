const GRID_ROWS = 16;
const GRID_COLS = 16;

const grid = document.getElementById('grid');

const createGrid = (squaresPerAxis) => {
    for (let i = 0; i < squaresPerAxis; i++) {
        for (let j = 0; j < squaresPerAxis; j++) {
            let box = document.createElement('div');
            box.classList.add('grid-square');
            box.style.width = `calc(100% * (1/ ${squaresPerAxis}))`
            grid.appendChild(box);
        }
    }
}

createGrid(16);

const settingsBtn = document.getElementById('settings');

settingsBtn.addEventListener('click', () => {
    const userInput = prompt("How many squares per side?");
    grid.replaceChildren();
    createGrid(userInput);
});
