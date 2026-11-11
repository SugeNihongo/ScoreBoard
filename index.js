// get document for score and button
let scoreA = document.querySelector(".scoreA")
let scoreB = document.querySelector(".scoreB")

let scoreA_increment = 0
let scoreB_increment = 0
// alert(scoreA);

// make onclick +1
function plusA1() {
    scoreA_increment += 1
    scoreA.innerText = scoreA_increment
}

function plusB1() {
    scoreB_increment += 1
    scoreB.innerText = scoreB_increment
}
// make onClick +2
function plusA2() {
    scoreA_increment += 2
    scoreA.innerText = scoreA_increment
}

function plusB2() {
    scoreB_increment += 2
    scoreB.innerText = scoreB_increment
}


// make onclick +3
function plusA3() {
    scoreA_increment += 3
    scoreA.innerText = scoreA_increment
}

function plusB3() {
    scoreB_increment += 3
    scoreB.innerText = scoreB_increment
}