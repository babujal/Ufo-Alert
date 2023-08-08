
export const restartButton = (playerOne, playerTwo) => {
    const button = document.querySelector('#restartButton')

    const clickHandeler = () => {
        if (playerOne.health === 0 || playerTwo.health === 0) {
            playerOne.x = 400
            playerOne.y = 587
            playerTwo.x = 400
            playerTwo.y = 15
            playerOne.health = 100
            playerTwo.health = 100
        }
    }
    button.addEventListener('click', clickHandeler)
}
