let music = new Audio("music.mp3");
let turnAudio = new Audio("ting.mp3");
let gameoverAudio = new Audio("gameover.mp3");

let gameover = false;
let turn = "X";

// music.play();
//function to change the turn
function changeTurn() {
    if(turn === "X") turn = "0"
    else turn = "X";
}

//function to check for win
const checkWin = () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    let wins = [
        [0 ,1 ,2],
        [3 ,4 ,5],
        [6 ,7 ,8],
        [0 ,3 ,6],
        [1 ,4 ,7],
        [2 ,5 ,8],
        [0 ,4 ,8],
        [2 ,4 ,6],
    ];

    wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && 
           (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && 
           (boxtexts[e[2]].innerText === boxtexts[e[0]].innerText) && 
           (boxtexts[e[0]].innerText !== '')) {

            infoText = document.querySelector('.info');
            infoText.innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;

            // document.querySelector('.imgbox').style.display = 'block';
            // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';

            let imgbox = document.querySelector('.imgbox');
            imgbox.style.display = "block";

            let img = imgbox.querySelector('img');
            img.style.width = "200px"; 
        }
    })
}

//Game Logic
let boxes = document.querySelectorAll(".box");
boxes.forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click' ,() => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            changeTurn();
            turnAudio.play();
            checkWin();

            if(!gameover){
                const infoText = document.querySelector('.info');
                infoText.textContent = `Turn for ${turn}`;
            }
        }
    })
})

let btn = document.getElementById('reset');
btn.addEventListener('click' ,() => {
    let boxText = document.querySelectorAll('.boxtext');
    boxText.forEach(element => {
        element.innerText = '';
    })
    turn = "X";

    infoText = document.querySelector('.info');
    infoText.textContent = `Turn for ${turn}`;

    gameover = false;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})