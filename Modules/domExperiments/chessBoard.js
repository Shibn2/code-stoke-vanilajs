import { addNewSection, addNewTab } from "./util";

const BOARD_SIZE = 8;

function chessBoard() {
  // Create Tab and section
  const chessBoardTab = addNewTab(null, null, "Chess Board");
  const chessBoardSection = addNewSection(null, null);
  chessBoardSection.innerHTML = `<div class="board-container" id="board-container"></div>`;
  const container = document.getElementById("board-container");

  function cellClickHandler(e, r, c) {
    let row = r;
    let col = c;
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        const target = container.querySelector(`#cell${i}${j}`);
        target.classList.remove("selected");
      }
    }
    while (row < BOARD_SIZE && col < BOARD_SIZE) {
      const target = container.querySelector(`#cell${row}${col}`);
      target.classList.add("selected");
      row++;
      col++;
    }

    row = r;
    col = c;
    while (row >= 0 && col >= 0) {
      const target = container.querySelector(`#cell${row}${col}`);
      target.classList.add("selected");
      row--;
      col--;
    }

    row = r;
    col = c;
    while (row >= 0 && col < BOARD_SIZE) {
      const target = container.querySelector(`#cell${row}${col}`);
      target.classList.add("selected");
      row--;
      col++;
    }

    row = r;
    col = c;
    while (row < BOARD_SIZE && col >= 0) {
      const target = container.querySelector(`#cell${row}${col}`);
      target.classList.add("selected");
      row++;
      col--;
    }
  }

  // create chessBoard

  let isWhite = false;
  for (let i = 0; i < BOARD_SIZE; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    isWhite = !isWhite;
    for (let j = 0; j < BOARD_SIZE; j++) {
      // create cells
      const cell = document.createElement("button");
      cell.addEventListener("click", (e) => cellClickHandler(e, i, j));
      cell.classList.add("cell");
      cell.id = `cell${i}${j}`;
      if (isWhite) {
        cell.classList.add("white");
      } else {
        cell.classList.add("black");
      }
      newRow.appendChild(cell);
      isWhite = !isWhite;
    }
    container.appendChild(newRow);
  }
}
export default chessBoard;
