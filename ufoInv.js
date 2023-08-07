import PlayerOne from "./playerOneCan.js"
import PlayerTwo from "./PlayerTwoUfo.js"
import { ufoHealthScreen, cannonHealthScreen } from "./updateScreen.js"

const canvas = document.getElementById('gameArea')
const ctx = canvas.getContext('2d')

const playerTwo = new PlayerTwo (canvas.width / 2, canvas.height /40)
const playerOne = new PlayerOne (canvas.width / 2, canvas.height / 1.02)

const gameLoop = () => {
    requestAnimationFrame(gameLoop)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    playerOne.drawMovCannon(ctx)
    playerTwo.drawUfo(ctx)
    playerOne.bullets.forEach((bullet) => {
        bullet.drawBullet(ctx)
    })
    ufoHealthScreen(playerTwo.health)
    cannonHealthScreen(playerOne.health)
    playerTwo.doIfHitByBullet(playerOne)
}

gameLoop()