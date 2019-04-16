/*
 * Title : Assignment 08
 * File Name : main.js
 * Location : P:\Pirple\Assignment - 08\main.js
 * Type : Pirple Assignment 08
 * Author : Malav
 * Data : 08/03/2019 (dd/mm/yyyy)
 * Description : Javascript Tic Tac Toe Logic.
 */

const board = document.getElementById("game_board");
// player 1 settings
let playerOne = {
    backgroundColor: "yellow",
    nickname: "p1",
    image: "cross",
}
// player 2 settings
let playerTwo = {
    backgroundColor: "green",
    nickname: "p2",
    image: "circle",
}
// will store information related to selected elements.
let selection = [
    [],
    [],
    []
];
// Set Default to player 1
let currentPlayer = playerOne,
    // moves count is 0
    moves = 0,
    // winner is false because we are checking for !winner to make it logical sounding
    winner = false;

// Switch The current player
const switchPlayer = function() {
    if (currentPlayer === playerOne)
        currentPlayer = playerTwo;
    else
        currentPlayer = playerOne;
}

// choose cell method
const selectCell = function(num, str) {
    selection[Math.floor(num / 3)][num % 3] = str;
}

// Determine winner :P
const checkWinner = function(moves, player) {
    // Moves are not enough to determine winner.
    if (moves < 5) return false;

    // console.log("Performing diagonal check");
    // Diagonals Check
    let result = true;
    for (let i = 0; i < 3; i++)
        result = result && (selection[i][i] === player);
    if (result)
        return true;
    result = true;
    for (let i = 0; i < 3; i++)
        result = result && (selection[i][2 - i] === player);
    if (result)
        return true;

    // console.log("Performing Row And Colomn check");
    // Row And Column Check
    for (let i = 0; i < 3; i++) {
        result = true;
        for (let j = 0; j < 3; j++)
            result = result && (selection[i][j] === player);
        if (result)
            return true;
        result = true;
        for (let j = 0; j < 3; j++)
            result = result && (selection[j][i] === player);
        if (result)
            return true;
    }
}

// Reset Game
const resetGame = function() {
    // console.log("RESET");
    moves = 0;
    selection = [
        [],
        [],
        []
    ];
    currentPlayer = playerOne;
    winner = false;
    cells = document.getElementById("game_board").getElementsByTagName("div");
    for (let everycell of cells) {
        everycell.style.backgroundColor = "grey";
        if (everycell.firstChild)
            everycell.removeChild(everycell.firstChild);
    }
}

// main function to evaluate
const processClick = function(event) {
    let elem = event.target;
    if (!winner && moves < 9 && elem.tagName === "DIV") {
        moves++;
        let img = document.createElement("img");
        img.setAttribute("src", currentPlayer.image + ".png");
        elem.appendChild(img);
        elem.style.backgroundColor = currentPlayer.backgroundColor;
        let num = elem.getAttribute("id");
        selectCell(num, currentPlayer.nickname);
        // console.log(currentPlayer.nickname);
        winner = checkWinner(moves, currentPlayer.nickname);
        if (winner)
            setTimeout(() => {
                window.alert("WINNER WINNER TURKEY DINNER... FOR ----> " + currentPlayer.nickname.toUpperCase());
                setTimeout(() => {
                    resetGame();
                }, 200);
            }, 200);
        else
            switchPlayer();
        if (moves === 9) {
            window.alert("CATS TOOK OVER THE GAME HOOOOMAN\nMeowww");
            resetGame();
        }
    } else {
        resetGame();
    }
}

function activateGame() {
    document.getElementById("game_board").removeAttribute("hidden");
    document.getElementById("Configure").setAttribute("hidden", "");
    playerOne.nickname = document.getElementById("playerone_name").value;
    playerTwo.nickname = document.getElementById("playertwo_name").value;
    board.addEventListener("click", processClick);
}
