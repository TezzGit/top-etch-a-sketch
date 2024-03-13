const grid = document.getElementById('grid');
const settingsBtn = document.getElementById('settings');
const clearBtn = document.getElementById('clear');
let lastSize = 16;

const createGrid = (squaresPerAxis) => {
    for (let i = 0; i < squaresPerAxis; i++) {
        for (let j = 0; j < squaresPerAxis; j++) {
            let box = document.createElement('div');
            box.classList.add('grid-square');
            box.style.width = `calc(100% * (1/ ${squaresPerAxis}))`
            box.style.display = 'flex'

            box.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'black';
                e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1;
            })

            grid.appendChild(box);
        }
    }
}

createGrid(lastSize);

settingsBtn.addEventListener('click', () => {
    const userInput = prompt("How many squares per side? (Min 1, Max 100)");
    if (userInput < 1 || userInput > 100) return;
    lastSize = userInput;
    grid.replaceChildren();
    createGrid(userInput);
});

clearBtn.addEventListener('click', () => {
    grid.replaceChildren();
    createGrid(lastSize);
})