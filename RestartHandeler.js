
export const restartButton = (playerOne, playerTwo) => {
    const button = document.querySelector('#restartButton')

    const clickHandeler = () => {
        if ((playerOne.health === 0) || (playerTwo.health === 0)) {
            //reset possition and health
            playerOne.x = 400
            playerOne.y = 587
            playerTwo.x = 400
            playerTwo.y = 15
            playerOne.health = 25
            playerTwo.health = 25
            playerOne.healthZero = true
            playerTwo.healthZero = true
            //errase bullet from array
            playerOne.bullets = []
            playerTwo.bullets = []
            //reset movements to false
            playerTwo.shootTrigerPressed = false
            playerTwo.moveLeft = false
            playerTwo.moveRight = false
            playerTwo.moveUp = false
            playerTwo.moveDown = false
            playerOne.shootTrigerPressed = false
            playerOne.moveLeft = false
            playerOne.moveRight = false

        }
    }
    button.addEventListener('click', clickHandeler)
}
