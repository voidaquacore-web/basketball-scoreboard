const home =  document.getElementById("home")
const guest = document.getElementById("guest")

let homeScore = 0
let guestScore = 0

function plusOneH() {
    homeScore += 1
    home.textContent = homeScore
}

function plusTwoH() {
    homeScore += 2
    home.textContent = homeScore
}
function plusThreeH() {
    homeScore += 3
    home.textContent = homeScore
}


function plusOneG() {
    guestScore += 1
    guest.textContent = guestScore
}

function plusTwoG() {
    guestScore += 2
    guest.textContent = guestScore
}
function plusThreeG() {
    guestScore+= 3
    guest.textContent = guestScore
}


