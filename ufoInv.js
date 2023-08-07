import BulletController from "./bulletController.js"

const canvas = document.getElementById('gameArea')
const ctx = canvas.getContext('2d')

//Player One class Cannon
class PlayerOne {
    constructor(x, y, health = 20, width = 50, height =10){
        this.x = x
        this.y = y
        this.health = health
        this.width = width
        this.height = height
        this.speed = 5
        this.bullets = []

        document.addEventListener('keydown',this.keydown)
        document.addEventListener('keyup',this.keyup)
    }
    drawMovCannon(ctx) {
        this.movement()
        //cannon base
        ctx.fillStyle = 'blue'
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fill()
        //cannon
        ctx.beginPath()
        ctx.moveTo(this.x + 25, this.y)
        ctx.lineTo(this.x + 25, this.y - 20)
        ctx.lineWidth = 10
        ctx.strokeStyle = 'red'
        ctx.stroke()
    }

    movement() {
        if (this.moveLeft){
            console.log('pressed')
            this.x -= this.speed
        }
        if (this.moveRight){
            console.log('pressed')
            this.x += this.speed
        }
        if (this.shootTrigerPressed) {
            const bulletX = this.x
            const bulletY = this.y

            this.bullets.push(new BulletController(bulletX, bulletY, 10, 5 ))
        }
    }

    keydown = (e) => {
        if (e.code === 'KeyA') {
            this.moveLeft = true
        }
        if (e.code === 'KeyD') {
            this.moveRight = true
        }
        if (e.code === 'KeyW') {
            this.shootTrigerPressed = true
        }
    }
    keyup = (e) => {
        if (e.code === 'KeyA') {
            this.moveLeft = false
        }
        if (e.code === 'KeyD') {
            this.moveRight = false
        }
        if (e.code === 'KeyW') {
            this.shootTrigerPressed = false
        }
    }
}

//Player Two class UFO
class PlayerTwo {
    constructor(x, y, health = 20, width = 50, height =10){
        this.x = x
        this.y = y
        this.health = health
        this.width = width
        this.height = height
        this.speed = 5
        this.player = []

        document.addEventListener('keydown',this.keydown)
        document.addEventListener('keyup',this.keyup)
    }

    drawUfo(ctx) {
        this.movement()
        ctx.fillStyle = 'green'
        ctx.beginPath()
        ctx.ellipse(this.x, this.y, 30, 10, 0, 0, Math.PI *2)
        ctx.fill()

    }

    movement() {
        if (this.moveLeft) {
            console.log('pressed')
            this.x -= this.speed
        }
        if (this.moveRight) {
            console.log('pressed')
            this.x += this.speed
        }
        if (this.moveUp) {
            this.y -= this.speed
        }
        if (this.moveDown) {
            this.y += this.speed
        }
    } 
    keydown = (e) => {
        if (e.code === 'ArrowLeft') {
            this.moveLeft = true
        }
        if (e.code === 'ArrowRight') {
            this.moveRight = true
        }
        if (e.code === 'ArrowUp') {
            this.moveUp = true
        }
        if (e.code === 'ArrowDown') {
            this.moveDown = true
        }
        if (e.code === 'Space') {
            this.shootTrigerPressed = true
        }
    }
    keyup = (e) => {
        if (e.code === 'ArrowLeft') {
            this.moveLeft = false
        }
        if (e.code === 'ArrowRight') {
            this.moveRight = false
        }
        if (e.code === 'ArrowUp') {
            this.moveUp = false
        }
        if (e.code === 'ArrowDown') {
            this.moveDown = false
        }
        if (e.code === 'Space') {
            this.shootTrigerPressed = false
        }
    }
    //Collision detection return
    colissionDetection(bullet) {
        const bulletX = bullet.x
        const bulletY = bullet.y
        const ufoX = this.x
        const ufoY = this.y
        const ufoWidth = this.width
        const ufoHeight = this.height

        return (
            bulletX + bullet.width > ufoX &&
            bulletX < ufoX + ufoWidth &&
            bulletY + bullet.height > ufoY &&
            bulletY < ufoY + ufoHeight)
    }
    //What to do if is hit
    hitByBullet() {
            this.x = -100
            this.y = -100
    }
    doIfHitByBullet()  {
        for (let i = playerOne.bullets.length - 1; i >= 0; i--) {
            const bullet = playerOne.bullets[i]
            if (this.colissionDetection(bullet)) {
                playerOne.bullets.splice(i, 1) 
                this.health -= bullet.damage
                console.log(this.health)
            }
            if (this.health == 0) {
                this.hitByBullet()
            }
        }
    }
}



const gameLoop = () => {
    requestAnimationFrame(gameLoop)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    playerOne.drawMovCannon(ctx)
    playerTwo.drawUfo(ctx)
    playerTwo.doIfHitByBullet()
    playerOne.bullets.forEach((bullet) => {
        bullet.drawBullet(ctx)
    })
}

const playerTwo = new PlayerTwo (canvas.width / 2, canvas.height /40)
const playerOne = new PlayerOne (canvas.width / 2, canvas.height / 1.02)

gameLoop()