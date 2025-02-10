controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim1`,
    200,
    false
    )
    mySprite.sayText("Jumping Jacks", 1000, false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim4`,
    150,
    false
    )
    mySprite.sayText("Dancing", 1000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    200,
    false
    )
    mySprite.sayText("Squats", 1000, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    200,
    false
    )
    mySprite.sayText("Throwing Ball", 1000, false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    200,
    false
    )
    mySprite.sayText("Walking", 1000, false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim`,
    200,
    false
    )
    mySprite.sayText("Handshake", 1000, false)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    .........fffff..........
    .........fffff..........
    .........fffff..........
    .........fffff..........
    .........fffff..........
    ...........f............
    ...........f............
    ...........f............
    ..........fff...........
    .........f.f.f..........
    ........f..f..f.........
    .......f...f...f........
    ...........f............
    ...........f............
    ...........f............
    ..........f.f...........
    ..........f.f...........
    .........f...f..........
    .........f...f..........
    ........f.....f.........
    `, SpriteKind.Player)
scene.setBackgroundColor(1)
