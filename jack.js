let card1 = 7
let card2 = 1
let sum = card1 + card2
let cards = [card1,card2]
let message = ""
let messagel = document.getElementById("messagel")
let hasjack = false
let alive = true


let summel = document.getElementById("sum")
let cardel = document.getElementById("cardel")

function resulter(){
    cardel.textContent = "Cards:" + cards
    if (sum === 21){
        message = "Podeiii!!"
        hasjack = true
    } else if (sum > 21){
        message = "Veliya Po Man"  
        alive = false     
    }else{
        message = "Adutha Aatam Polama?"
    }
    summel.innerText = sum
    messagel.innerHTML = message
}

function random(){
    return Math.floor(Math.random()*11) +1 
}
function newCard(){
    if ( alive === true && hasjack === false){

        let card3 = random()
        sum+= card3
        cards.push(card3)
        resulter()
    }
}
function reloader(){
    location.reload()
}