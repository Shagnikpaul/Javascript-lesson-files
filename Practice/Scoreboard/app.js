const playerOneScore = document.querySelector('#p1Display')
const playerTwoScore = document.querySelector('#p2Display')
const winningScore = document.querySelector('#playto')



// buttons 

const p1B = document.querySelector('#p1Button')
const p2B = document.querySelector('#p2Button')
const resetB = document.querySelector('#reset')




p1B.addEventListener('click', function () {
    playerOneScore.innerText = parseInt(playerOneScore.innerText) + 1
    checkWinner();
    console.log('p1 scored !!')
})

p2B.addEventListener('click', function () {
    playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + 1
    checkWinner()
    console.log('p2 scored !!')
})


resetB.addEventListener('click', function () {
    p1B.toggleAttribute('disabled')
    p2B.toggleAttribute('disabled')
    winningScore.toggleAttribute('disabled')
    playerOneScore.style = 'color: #000000;'
    playerTwoScore.style = 'color: #000000;'
    playerOneScore.innerText = '0'
    playerTwoScore.innerText = '0'
    console.log('reset scor !!')
})


function checkWinner() {
    if (playerOneScore.innerText === winningScore.value) {
        playerOneScore.style = 'color: #3dbf00;'
        playerTwoScore.style = 'color: #ff3e30;'
        p1B.toggleAttribute('disabled')
        p2B.toggleAttribute('disabled')
        winningScore.toggleAttribute('disabled')
    }
    else if (playerTwoScore.innerText === winningScore.value) {
        playerTwoScore.style = 'color: #3dbf00;'
        playerOneScore.style = 'color: #ff3e30;'
        p1B.toggleAttribute('disabled')
        p2B.toggleAttribute('disabled')
        winningScore.toggleAttribute('disabled')
    }

}