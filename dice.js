//-------------------------------------------DICE-GAME----------------------------------------------

let rdice = document.querySelector('#rdice');
let p1 = document.querySelector('#p1').classList;
let p2 = document.querySelector('#p2').classList;
let tpoint1 = document.querySelector('#point1');
let tpoint2 = document.querySelector('#point2');
let rounds = document.querySelector('#rounds');
let enterbtn = document.querySelector('#enterbtn');
let winner = document.querySelector('#winner');

let currentScore = document.querySelector('#dscore');
let totalpoint1 = 0;
let totalpoint2 = 0;
let touch = 0;
let n;

//-------------enterButton for no. of rounds ----------
enterbtn.addEventListener("click", function () {
    n = rounds.value * 2;
    console.log(n);
    rounds.value = '';
    rdice.disabled = false;
    ngame.disabled = false;
    enterbtn.disabled = true;
})

//--------------- for rolling dice -----------
rdice.addEventListener("click", function () {
    if (n != 0) {
        if (touch % 2 === 0) {
            p1.add('green');
            p2.remove('green');
            let random = RandomGen();
            totalpoint1 = totalpoint1 + random;
            tpoint1.innerText = totalpoint1;
            console.log(random);
            currentScore.innerText = random;
            touch = touch + 1;
            n = n - 1;
        } else {
            p2.add('green');
            p1.remove('green');
            let random = RandomGen();
            totalpoint2 = totalpoint2 + random;
            tpoint2.innerText = totalpoint2;
            console.log(random);
            currentScore.innerText = random;
            touch = touch + 1;
            n = n - 1;
        }
    } else {
        if (totalpoint1 > totalpoint2) {
            winner.innerText = "PLAYER- 1 IS WINNER";
            p1.add('green');
            p2.remove('green');
        } else if (totalpoint2 > totalpoint1) {
            winner.innerText ="PLAYER- 2 IS WINNER";
            p2.add('green');
            p1.remove('green');
        } else {
            winner.innerText = "DRAW";
            p2.add('green');
            p1.add('green');
        }
    }
})
//----------- to generate random dice number------
function RandomGen() {
    let random = Math.floor(Math.random() * 6 + 1);
    return random;
}

//-------------- for new game------------
ngame.addEventListener("click", function () {
    location.reload();
})
