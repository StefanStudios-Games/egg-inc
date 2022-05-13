namespace SpriteKind {
    export const Point1 = SpriteKind.create()
    export const chicken = SpriteKind.create()
    export const Point2 = SpriteKind.create()
    export const Point3 = SpriteKind.create()
    export const Point4 = SpriteKind.create()
    export const house = SpriteKind.create()
    export const house2 = SpriteKind.create()
    export const warning = SpriteKind.create()
    export const pointer = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.chicken, SpriteKind.house2, function (sprite, otherSprite) {
    pause(200)
    sprite.destroy()
    house2chickens += 1
    info.setScore(house2chickens)
    statsH2.value = house2chickens * 4
})
function createHouse2 () {
    house2 = sprites.create(img`
        fffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeff.
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeff...
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeff.....
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeff.......
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeff.........
        feeeeeeeefffffffffffffffeeeeeeeefeeeeff...........
        feeeeeeeefffffffffffffffeeeeeeeefeeff.............
        feeeeeeeefffffffffffffffeeeeeeeefff...............
        fffffffffffffffffffffffffffffffff.................
        `, SpriteKind.house2)
    house2.setPosition(30, 2)
    house2chickens = 0
    statsH2 = statusbars.create(20, 5, StatusBarKind.Health)
    statsH2.positionDirection(CollisionDirection.Bottom)
    statsH2.attachToSprite(house2, -10, 15)
    statsH2.setColor(2, 1)
    statsH2.setBarBorder(1, 15)
    statsH2.value = 0
}
function create_chicken () {
    chicken = sprites.createProjectileFromSide(img`
        . . f f . . . . . 
        . f 1 1 f . . . . 
        5 5 1 1 1 f . . . 
        . . f 1 1 1 f f . 
        . . f 1 1 1 d 1 f 
        . . f 1 d 1 1 d f 
        . . . f 1 d d 1 f 
        . . . f f f f f f 
        . . . . f . f . . 
        . . . f f f f . . 
        `, -55, 0)
    chicken.setKind(SpriteKind.chicken)
    chicken.setPosition(143, randint(55, 63))
    animation.runImageAnimation(
    chicken,
    [img`
        . . f f . . . . . . 
        . f 1 1 f . . . . . 
        5 5 1 1 1 f . . . . 
        . . f 1 1 1 f f . . 
        . . f 1 1 1 d 1 f . 
        . . f 1 d 1 1 d f . 
        . . . f 1 d d 1 f . 
        . . . f f f f f f . 
        . . . . f . f . . . 
        . . . f f f f . . . 
        . . . . . . . . . . 
        `,img`
        . . f f . . . . . . 
        . f 1 1 f . . . . . 
        5 5 1 1 1 f . . . . 
        . . f 1 1 1 f f . . 
        . . f 1 1 1 d 1 f . 
        . . f 1 d 1 1 d f . 
        . . . f 1 d d 1 f . 
        . . . f f f f f f . 
        . . . . f . . f . . 
        . . f f . . f f . . 
        . . . . . . . . . . 
        `,img`
        . . f f . . . . . . 
        . f 1 1 f . . . . . 
        5 5 1 1 1 f . . . . 
        . . f 1 1 1 f f . . 
        . . f 1 1 1 d 1 f . 
        . . f 1 d 1 1 d f . 
        . . . f 1 d d 1 f . 
        . . . f f f f f f . 
        . . . . f . . f . . 
        . . . f f . f f . . 
        . . . . . . . . . . 
        `,img`
        . . f f . . . . . . 
        . f 1 1 f . . . . . 
        5 5 1 1 1 f . . . . 
        . . f 1 1 1 f f . . 
        . . f 1 1 1 d 1 f . 
        . . f 1 d 1 1 d f . 
        . . . f 1 d d 1 f . 
        . . . f f f f f f . 
        . . . . . f f . . . 
        . . . . f f f . . . 
        . . . . . . . . . . 
        `],
    50,
    true
    )
}
sprites.onOverlap(SpriteKind.chicken, SpriteKind.Point4, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = -55
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (house2chickens < 25 || house1chickens < 25) {
        clickr.setImage(img`
            .........5555555555555555555555555555555555555555555555555555555.........
            ........552222222222222222222222222222222222222222222222222222255........
            ......5522222222222222222222222222222222222222222222222222222222255......
            ....55222222222222222222222222222222222222222222222222222222222222255....
            ...5222222222222222222222222222222222222222222222222222222222222222225...
            ..522222222222222222222222222211122222222222222222222222222222222222225..
            .52222222222222222222222222221111122222222222222222222222222222222222225.
            .52222222222222222222222222221111112222222222222222222222222222222222225.
            5222222222222222222222222221111111112222222222222222222222222222222222225
            5222222222222222222222222221111111112222222222222222222222222222222222225
            5222222222222222222222222222211111111122222222222222222222222222222222225
            5222222222222222222222222222221111111112222222222222222222222222222222225
            5222222222222222222222222222221111111111122222222222222222222222222222225
            5222222222222222222222222222221111111111112222222222222222222222222222225
            5222222222222222222222222222221111111111112222222222222222222222222222225
            5222222222222222222222222222222111111111112222222222222222222222222222225
            5222222222222222222222222222222111111111112222222222222222222222222222225
            5222222222222222222222222222222211111111112222222222222222222222222222225
            5222222222222222222222222222222211111111112222222222222222222222222222225
            .52222222222222222222222222222222212111122222222222222222222222222222225.
            .52222222222222222222222222222222212221222222222222222222222222222222225.
            ..522222222222222222222222222222211211122222222222222222222222222222225..
            ...5222222222222222222222222222222222222222222222222222222222222222225...
            ....55222222222222222222222222222222222222222222222222222222222222255....
            ......5522222222222222222222222222222222222222222222222222222222255......
            ........555555555555555555555555555555555555555555555555555555555........
            `)
        create_chicken()
    } else {
    	
    }
})
function createRallyPoints () {
    rallyPoint1 = sprites.create(img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.Point1)
    rallyPoint2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f f 
        . . f f f f . . . . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Point2)
    rallyPoint3 = sprites.create(img`
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . 2 2 7 2 2 . . . . . 
        . . . . . 2 2 7 7 7 2 2 . . . . 
        . . . . 2 2 7 7 7 7 7 2 2 . . . 
        . . . . 2 2 2 2 7 2 2 2 2 . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 7 2 . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        `, SpriteKind.Point3)
    rallyPoint4 = sprites.create(img`
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . 8 8 8 . . . . . . 
        . . . . . . 8 8 7 8 8 . . . . . 
        . . . . . 8 8 7 7 7 8 8 . . . . 
        . . . . 8 8 7 7 7 7 7 8 8 . . . 
        . . . . 8 8 8 8 7 8 8 8 8 . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 7 8 . . . . . . 
        . . . . . . . 8 8 8 . . . . . . 
        `, SpriteKind.Point4)
    rallyPoint1.setFlag(SpriteFlag.Invisible, true)
    rallyPoint2.setFlag(SpriteFlag.Invisible, true)
    rallyPoint3.setFlag(SpriteFlag.Invisible, true)
    rallyPoint4.setFlag(SpriteFlag.Invisible, true)
    rallyPoint1.setPosition(95, 56)
    rallyPoint2.setPosition(100, 20)
    rallyPoint3.setPosition(70, 25)
    rallyPoint4.setPosition(12, 25)
}
function createPointer () {
    pointer = sprites.create(img`
        f . . . . . . . . . . . 
        f f . . . . . . . . . . 
        f 1 f . . . . . . . . . 
        f 1 1 f . . . . . . . . 
        f 1 1 1 f . . . . . . . 
        f 1 1 1 1 f . . . . . . 
        f 1 1 1 1 1 f . . . . . 
        f 1 1 1 1 1 1 f . . . . 
        f 1 1 1 1 1 1 1 f . . . 
        f 1 1 1 1 1 1 1 1 f . . 
        f 1 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 f f f f f 
        f 1 1 1 f 1 1 f . . . . 
        f 1 1 f . f 1 1 f . . . 
        f 1 f . . f 1 1 f . . . 
        f f . . . . f 1 1 f . . 
        . . . . . . f 1 1 f . . 
        . . . . . . . f f . . . 
        `, SpriteKind.pointer)
}
function createHouse1 () {
    house1 = sprites.create(img`
        fffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeeef
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeeeff.
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeeeff...
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeeeff.....
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeeeff.......
        feeeeeeeefffffffffffffffeeeeeeeefeeeeeeff.........
        feeeeeeeefffffffffffffffeeeeeeeefeeeeff...........
        feeeeeeeefffffffffffffffeeeeeeeefeeff.............
        feeeeeeeefffffffffffffffeeeeeeeefff...............
        fffffffffffffffffffffffffffffffff.................
        `, SpriteKind.house)
    house1.setPosition(85, 2)
    house1chickens = 0
    statsH1 = statusbars.create(20, 5, StatusBarKind.Health)
    statsH1.positionDirection(CollisionDirection.Bottom)
    statsH1.attachToSprite(house1, -10, 15)
    statsH1.setColor(2, 1)
    statsH1.setBarBorder(1, 15)
    statsH1.value = 0
}
sprites.onOverlap(SpriteKind.chicken, SpriteKind.house, function (sprite, otherSprite) {
    pause(200)
    sprite.destroy()
    house1chickens += 1
    statsH1.value = house1chickens * 4
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    clickr.setImage(img`
        ..........ffffffffffffffffffffffffffffffffffffffffffffffffff..........
        .........ff222222222222222222222222222222222222222222222222ff.........
        .......ff2222222222222222222222222222222222222222222222222222ff.......
        .....ff22222222222222222222222222222222222222222222222222222222ff.....
        ....f222222222222222222222222222222222222222222222222222222222222f....
        ...f22222222222222222222222221112222222222222222222222222222222222f...
        ..f2222222222222222222222222111112222222222222222222222222222222222f..
        ..f2222222222222222222222222111111222222222222222222222222222222222f..
        .f222222222222222222222222111111111222222222222222222222222222222222f.
        .f222222222222222222222222221111111122222222222222222222222222222222f.
        f22222222222222222222222222221111111122222222222222222222222222222222f
        f22222222222222222222222222221111111111222222222222222222222222222222f
        f22222222222222222222222222221111111111122222222222222222222222222222f
        f22222222222222222222222222221111111111122222222222222222222222222222f
        f22222222222222222222222222222111111111122222222222222222222222222222f
        .f222222222222222222222222222211111111112222222222222222222222222222f.
        .f222222222222222222222222222221111111112222222222222222222222222222f.
        ..f2222222222222222222222222222221211122222222222222222222222222222f..
        ..f2222222222222222222222222222221221222222222222222222222222222222f..
        ...f22222222222222222222222222221121122222222222222222222222222222f...
        ....f222222222222222222222222222222222222222222222222222222222222f....
        .....ff22222222222222222222222222222222222222222222222222222222ff.....
        .......ff2222222222222222222222222222222222222222222222222222ff.......
        .........ffffffffffffffffffffffffffffffffffffffffffffffffffff.........
        `)
})
sprites.onOverlap(SpriteKind.chicken, SpriteKind.Point2, function (sprite, otherSprite) {
    sprite.vx = -55
    sprite.vy = 0
})
sprites.onOverlap(SpriteKind.chicken, SpriteKind.Point3, function (sprite, otherSprite) {
    if (Math.percentChance(75) && house1chickens < 25) {
        sprite.vx = 0
        sprite.vy = -55
    } else {
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.chicken, SpriteKind.Point1, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = -55
})
let statsH1: StatusBarSprite = null
let house1: Sprite = null
let pointer: Sprite = null
let rallyPoint4: Sprite = null
let rallyPoint3: Sprite = null
let rallyPoint2: Sprite = null
let rallyPoint1: Sprite = null
let house1chickens = 0
let chicken: Sprite = null
let house2: Sprite = null
let statsH2: StatusBarSprite = null
let house2chickens = 0
let clickr: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777777777777777777777777777777777777777777777777
    7744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444777777777777777777777777777777777777777777777777777777
    7744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444777777777777777777777777777777777777777777777777777777
    7774444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444777777777777777777777777777777777777777777777777777777
    7774444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777
    7774444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777
    7777444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777
    7777444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777777777777777777777777777777777777777777777
    7777444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444447777777777777777777777777777777777777777777777777777
    7777744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444777777777777777777777777777777777777777777777777777
    7777744444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444477777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444477777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444477777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444447777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444447777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444447777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444477777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444477777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444447777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444447777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444447777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444444777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444444447777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444444444444444777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444444444444444444444477777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444444444444444444444444444447777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444444444444444444444444444444444444477777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444444444444444444444444444444444444444444447777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777774444444444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444444444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777444444444444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777744444
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777
    fffffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777
    fffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff1111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff1111111111111111111ffffffffffffffffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
clickr = sprites.create(img`
    ..........ffffffffffffffffffffffffffffffffffffffffffffffffff..........
    .........ff222222222222222222222222222222222222222222222222ff.........
    .......ff2222222222222222222222222222222222222222222222222222ff.......
    .....ff22222222222222222222222222222222222222222222222222222222ff.....
    ....f222222222222222222222222222222222222222222222222222222222222f....
    ...f22222222222222222222222221112222222222222222222222222222222222f...
    ..f2222222222222222222222222111112222222222222222222222222222222222f..
    ..f2222222222222222222222222111111222222222222222222222222222222222f..
    .f222222222222222222222222111111111222222222222222222222222222222222f.
    .f222222222222222222222222221111111122222222222222222222222222222222f.
    f22222222222222222222222222221111111122222222222222222222222222222222f
    f22222222222222222222222222221111111111222222222222222222222222222222f
    f22222222222222222222222222221111111111122222222222222222222222222222f
    f22222222222222222222222222221111111111122222222222222222222222222222f
    f22222222222222222222222222222111111111122222222222222222222222222222f
    .f222222222222222222222222222211111111112222222222222222222222222222f.
    .f222222222222222222222222222221111111112222222222222222222222222222f.
    ..f2222222222222222222222222222221211122222222222222222222222222222f..
    ..f2222222222222222222222222222221221222222222222222222222222222222f..
    ...f22222222222222222222222222221121122222222222222222222222222222f...
    ....f222222222222222222222222222222222222222222222222222222222222f....
    .....ff22222222222222222222222222222222222222222222222222222222ff.....
    .......ff2222222222222222222222222222222222222222222222222222ff.......
    .........ffffffffffffffffffffffffffffffffffffffffffffffffffff.........
    `, SpriteKind.Player)
clickr.setPosition(80, 105)
createHouse1()
createHouse2()
createRallyPoints()
