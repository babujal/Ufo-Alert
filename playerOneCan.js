import BulletController from "./bulletController.js"

export default class PlayerOne {
    constructor(x, y, health = 100, width = 50, height =10){
        this.x = x
        this.y = y
        this.health = health
        this.width = width
        this.height = height
        this.speed = 5
        this.bullets = []
        this.score = 0

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

    addScore() {
        this.playerTwo.score += 1
    }
    hitByBullet() {
        this.x = -100
        this.y = -100    
    }
    doIfHitByBullet(playerTwo)  {
        for (let i = playerTwo.bullets.length - 1; i >= 0; i--) {
            const bullet = playerTwo.bullets[i]
            if (this.colissionDetection(bullet)) {
                playerTwo.bullets.splice(i, 1) 
                this.health -= bullet.damage
                console.log(this.health)
            }
            if (this.health == 0) {
                this.hitByBullet()
            }
        }
    }
}