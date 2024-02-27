const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const reset = document.querySelector(".reset")
const textPlayer1 = document.querySelector(".textPlayer1")
const textPlayer2 = document.querySelector(".textPlayer2")
const scoreWin = document.getElementById("scoreWin")



window.onload = () =>{
    scoreWin.focus()
}


scoreWin.addEventListener("change", () => {
    localStorage.setItem("score", scoreWin.value);
});


player1.addEventListener("click", () => {
    if(textPlayer1.textContent < scoreWin.value){
        textPlayer1.textContent++
    }if(textPlayer1.textContent == scoreWin.value){
        textPlayer1.style.color = "greenyellow"
        textPlayer2.style.color = "red"
        scoreWin.value = ""
        player1.disabled = true
        player2.disabled = true
    }
})

player2.addEventListener("click", () => {
    if(textPlayer2.textContent < scoreWin.value){
        textPlayer2.textContent++
    } if(textPlayer2.textContent == scoreWin.value){
        textPlayer2.style.color = "greenyellow"
        textPlayer1.style.color = "red"
        scoreWin.value = ""
        player1.disabled = true
        player2.disabled = true
    }
})

reset.addEventListener("click", () => {
    textPlayer1.textContent = 0
    textPlayer2.textContent = 0
    textPlayer2.style.color = "black"
    textPlayer1.style.color = "black"
    scoreWin.value = ""
    player1.disabled = false
    player2.disabled = false
    let score = localStorage.getItem("score");
    scoreWin.value = score;
    scoreWin.focus()
})
