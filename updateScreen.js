export const ufoHealthScreen = (health) => {
    const ufoHeealthDiv = document.querySelector('#ufoHealth')
    ufoHeealthDiv.innerText = health
}
ufoHealthScreen()

export const cannonHealthScreen = (health) => {
    const cannonHealthDiv = document.querySelector('#cannonHealth')
    cannonHealthDiv.innerText = health
}
cannonHealthScreen()