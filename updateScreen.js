
export const ufoHealthScreen = (health) => {
    const ufoHeealthDiv = document.querySelector('#ufoHealth')
    ufoHeealthDiv.innerText = health
}
export const ufoScoreScreen = (score) => {
    const ufoScoreDiv = document.querySelector('#ufoScore')
    ufoScoreDiv.innerText = score
}
export const cannonHealthScreen = (health) => {
    const cannonHealthDiv = document.querySelector('#cannonHealth')
    cannonHealthDiv.innerText = health
}
export const cannonScoreScreen = (score) => {
    const cannonScoreDiv = document.querySelector('#cannonScore')
    cannonScoreDiv.innerText = score
}

export const scoreUdate = (playerOne, playerTwo) => {
    let sumPlayerTwo = 0
    let sumPlayerOne = 0
    if (playerOne.health <= 0) {
        sumPlayerTwo += 1
    }
    playerTwo.score = sumPlayerTwo
    if (playerTwo.health <= 0) {
        sumPlayerOne += 1
    }
    playerOne.score = sumPlayerOne
}