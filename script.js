function createGrid(gridSize) {
    const container = document.querySelector('#container-principal');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const cellSize = (Math.min(containerWidth, containerHeight) - 10) / gridSize - 2;

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellSize + 'px';
            cell.style.height = cellSize + 'px';
            cell.addEventListener('mouseover', function () {
                const R = Math.floor(Math.random() * 256);
                const G = Math.floor(Math.random() * 256);
                const B = Math.floor(Math.random() * 256);
                cell.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
            });
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

let button = document.querySelector('#consult');
button.addEventListener('click', function() {
    let gridSize = prompt("Ingrese el tamaño de la grilla (por ejemplo, 16 para una grilla de 16x16):");
    if (gridSize > 100) {
        alert("El tamaño máximo de la grilla es 100x100.");
        return;
    }
    if (gridSize) {
        const container = document.querySelector('#container-principal');
        container.innerHTML = ''; // Limpiar la grilla existente
        createGrid(gridSize);
    }
});
