export default class BulletController {
    constructor(x, y, speed, damage) {
        this.x = x
        this.y = y
        this.speed = speed
        this.damage = damage

        this.width = 5
        this.height = 10
        this.color = 'red'
    }

    drawBullet(ctx) {
        ctx.fillStyle = this.color
        this.y -= this.speed
        ctx.fillRect(this.x, this.y - this.speed, this.width, this.height)
    }
}