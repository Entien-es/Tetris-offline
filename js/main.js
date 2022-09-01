const cols = 10;
const rows = 20;
const block_size = 30;
const color_mapping = [
    "red",
    "orange",
    "green",
    "blue",
    "cyan",
    "purple",
    "white",
];

const white_colorId = 7;
const canvas = document.getElementById('board');
const c = canvas.getContext('2d');
    c.canvas.width = cols * block_size;
    c.canvas.height = rows * block_size;

class Board {
    constructor(c) {
        this.c = c;
        this.grid = this.generateWhiteBoard();
    }
    generateWhiteBoard() {
        return Array.from({length: rows}, () => Array(cols).fill(white_colorId));
    }
    drawCell(x, y, colorId) {
        this.c.fillStyle = color_mapping[colorId] || color_mapping[white_colorId];
        this.c.fillRect(x * block_size, y * block_size, block_size, block_size);
        this.c.fillStyle = "black";
        this.c.strokeRect(x * block_size, y * block_size, block_size, block_size);

    }
    drawBorad() {
        for(let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < array.length[0]; col++) {
                this.drawCell(col, row, white_colorId);
            }
        }
    }
}

board = new Board(c);
board.drawBorad();

console.table(board.grid);

