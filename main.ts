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
    export const X = SpriteKind.create()
    export const Upgrade = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.chicken, SpriteKind.house2, function (sprite, otherSprite) {
    pause(200)
    sprite.destroy()
    house2chickens += 1
    statsH2.value = Math.map(house2chickens, 0, 25, 0, 100)
})
function createHouse2 () {
    house2 = sprites.create(img`
        ................fffffffffffffffffffff.............
        ..............ffeeffeeeeeeeeeeeeeeeeeff...........
        ...........fffeeeeeeffeeeeeeeeeeeeeeeeeff.........
        .........ffeeeeeeeeeeefffeeeeeeeeeeeeeeeeff.......
        .......ffeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeff.....
        ....fffeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeff...
        ..ffeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeff.
        ffffffffffffffffffffffffffffffffffffffffffffffffff
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
    house2.setPosition(30, 17)
    house2chickens = 0
    statsH2 = statusbars.create(20, 5, StatusBarKind.Health)
    statsH2.z = 50
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
    chicken.setPosition(143, randint(70, 78))
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
    pointer.setImage(img`
        . . . . . . . . . . . . 
        f . . . . . . . . . . . 
        f f . . . . . . . . . . 
        f 1 f f . . . . . . . . 
        f 1 1 1 f . . . . . . . 
        f 1 1 1 1 f . . . . . . 
        f 1 1 1 1 1 f f . . . . 
        f 1 1 1 1 1 1 1 f . . . 
        f 1 1 1 1 1 1 1 1 f f . 
        f 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 f f f f f 
        f 1 1 1 f 1 1 f . . . . 
        f 1 1 f . f 1 1 f . . . 
        f 1 f . . f 1 1 f . . . 
        f f . . . . f 1 1 f . . 
        . . . . . . f 1 1 f . . 
        . . . . . . . f f . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `)
    if (pointer.overlapsWith(clickr)) {
        if (house2chickens < 25 || house1chickens < MaxCH1) {
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
        }
    }
    if (pointer.overlapsWith(house1)) {
        if (sprites.readDataBoolean(house1popUp, "invisible") == true) {
            house1popUp.setFlag(SpriteFlag.Invisible, false)
            sprites.setDataBoolean(house1popUp, "invisible", false)
            PopUp1X.setFlag(SpriteFlag.Invisible, false)
            PopUp1X.setFlag(SpriteFlag.Ghost, false)
            PopUp1upg.setFlag(SpriteFlag.Invisible, false)
            PopUp1upg.setFlag(SpriteFlag.Ghost, false)
        }
    }
    if (pointer.overlapsWith(PopUp1X)) {
        house1popUp.setFlag(SpriteFlag.Invisible, true)
        sprites.setDataBoolean(house1popUp, "invisible", true)
        PopUp1X.setFlag(SpriteFlag.Invisible, true)
        PopUp1X.setFlag(SpriteFlag.Ghost, true)
        PopUp1upg.setFlag(SpriteFlag.Invisible, true)
        PopUp1upg.setFlag(SpriteFlag.Ghost, true)
    }
    if (pointer.overlapsWith(PopUp1upg)) {
        upgradeHouse1()
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
    rallyPoint1.setPosition(95, 71)
    rallyPoint2.setPosition(100, 35)
    rallyPoint3.setPosition(70, 40)
    rallyPoint4.setPosition(12, 40)
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
    pointer.z = 100
    pointer.setPosition(8, 55)
    pointer.setStayInScreen(true)
    controller.moveSprite(pointer, 80, 80)
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
    house1IMG = [img`
        ................fffffffffffffffffffff.............
        ..............ffeeffeeeeeeeeeeeeeeeeeff...........
        ...........fffeeeeeeffeeeeeeeeeeeeeeeeeff.........
        .........ffeeeeeeeeeeefffeeeeeeeeeeeeeeeeff.......
        .......ffeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeff.....
        ....fffeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeff...
        ..ffeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeff.
        ffffffffffffffffffffffffffffffffffffffffffffffffff
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
        `, img`
        ................fffffffffffffffffffff.............
        ..............ff88ff88888888888888888ff...........
        ...........fff888888ff88888888888888888ff.........
        .........ff88888888888fff8888888888888888ff.......
        .......ff8888888888888888ff8888888888888888ff.....
        ....fff88888888888888888888ff8888888888888888ff...
        ..ff8888888888888888888888888ff8888888888888888ff.
        ffffffffffffffffffffffffffffffffffffffffffffffffff
        f8888888888888888888888888888888f8888888888888888f
        f8888888888888888888888888888888f8888888888888888f
        f8888888888888888888888888888888f8888888888888888f
        f8888888888888888888888888888888f8888888888888888f
        f8888888888888888888888888888888f8888888888888888f
        f8888888888888888888888888888888f8888888888888888f
        f8888888888888888888888888888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f8888888888888888f
        f88888888fffffffffffffff88888888f88888888888888ff.
        f88888888fffffffffffffff88888888f888888888888ff...
        f88888888fffffffffffffff88888888f8888888888ff.....
        f88888888fffffffffffffff88888888f88888888ff.......
        f88888888fffffffffffffff88888888f888888ff.........
        f88888888fffffffffffffff88888888f8888ff...........
        f88888888fffffffffffffff88888888f88ff.............
        f88888888fffffffffffffff88888888fff...............
        fffffffffffffffffffffffffffffffff.................
        `, img`
        ...........222222444444444444444444444444444444444444444444...........
        ...........222222444444444444444444444444444444444444444444...........
        .........22eeeeee24444444444444444444444444444444444444eee444.........
        ........2eee444ee244444444444444444444444444444444444444444444........
        .......2eee444444e2444444444444eee44444444444444444444444444444.......
        .......2eee444444e2444444444444eee44444444444444444444444444444.......
        .....22ee444444444e2244444444444444444444444444444444444444444444.....
        ....2eee44444444444ee244444444444444444444444444444444444444444444....
        ...2eee44444444444444e22444444444444444444444444eee44444444444444444..
        ..22eee44444444444444e22444444444444444444444444eee44444444444444444..
        .2eee4444444444444444eee2444444eee44444444444444444444444444444eee444.
        2eee444444444444444444eee444444444444444444444444444444444444444444444
        ..cccbbbbbbbbbbbbbbbbbbbddddbbbddddddddddddddddddddddddddddddddddbbbb.
        ..cccbbbbbbbbbbbbbbbbbbbddddbbbddddddddddddddddddddddddddddddddddbbbb.
        ..bbbbbbbbbbbbbbbbbbbbccddddddddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddbddddddd.
        ..bbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddbddddddd.
        ..bbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddbddddddddddddddddddddddd.
        ..bbbbbbbbbbcccbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbbbbbbcccbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbffffffffffbbbbbbbddddddddeeeeeedddeeeeeedddddddddddddddeeeeeed.
        ..bbbbbffffffffffbbbbcccdddddddde6666eddde6666eddddddddddddddde6666ed.
        ..bbbbbffffffffffbbbbbbbdddddddde6666eddde6666eddddddddddddddde6666ed.
        ..bbbbbffffffffffbbbbbbbdddddddde6666eddde6666eddddddddddddddde6666ed.
        ..bbbbbffffffffffbbbbbbbdddddddde6666eddde6666eddddddddddddddde6666ed.
        ..bbbbbffffffffffbbbbbbbddddddddeeeeeedddeeeeeedddddddddddddddeeeeeed.
        ..bbbbbffffffffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbffffffffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbffffffffffbbbbbbbddddbdddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbffffffffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..cccbbffffffffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..cccbbffffffffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddd.
        ..bbbbbffffffffffcbbbbbbdddddddddddbbbddddddddddddddddddddddddddddddb.
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        `]
    sprites.setDataNumber(house1, "level", 0)
    house1.setImage(house1IMG[sprites.readDataNumber(house1, "level")])
    house1.setPosition(85, 17)
    MaxCH1 = 25
    house1chickens = 0
    statsH1 = statusbars.create(20, 5, StatusBarKind.Health)
    statsH1.z = 50
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
    statsH1.value = Math.map(house1chickens, 0, MaxCH1, 0, 100)
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
    pointer.setImage(img`
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
        `)
})
sprites.onOverlap(SpriteKind.chicken, SpriteKind.Point2, function (sprite, otherSprite) {
    sprite.vx = -55
    sprite.vy = 0
})
function createPopUps () {
    house1popUp = sprites.create(img`
        ffffffffffffffffffffffffffffffff
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f1f111fff1f1f1fff1f1111f1f1fff1f
        f1f111f111f1f1f111f1111f1f1f1f1f
        f1f111fff1f1f1fff1f1111f1f1fff1f
        f1f111f111f1f1f111f1111f1f1f111f
        f1fff1fff11f11fff1fff11fff1f111f
        f111111111111111111111111111111f
        f141111411111111111111111111111f
        f141114411111111111111111111111f
        f144411411111111111111111111111f
        f141414441111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        f111111111111111111111111111111f
        ffffffffffffffffffffffffffffffff
        `, SpriteKind.Player)
    house1popUp.z = 80
    house1popUp.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataBoolean(house1popUp, "invisible", true)
    house1popUp.setPosition(110, 20)
    PopUp1X = sprites.create(assets.image`10`, SpriteKind.X)
    PopUp1X.setPosition(125, 5)
    PopUp1X.setFlag(SpriteFlag.Invisible, true)
    PopUp1X.setFlag(SpriteFlag.Ghost, true)
    PopUp1X.z = 85
    PopUp1upg = sprites.create(img`
        .ffffffffffffffffffffffffff.
        f44444444444444444444444444f
        f44444444444444444ff4444444f
        f444f44f4ff444444ffff444444f
        f444f44f4f4f4444ffffff44444f
        f444f44f4fff444444ff4444444f
        f444f44f4f44444444ff4444444f
        f444f44f4f44444444ff4444444f
        f4444ff44f44444444ff4444444f
        f44444444444444444ff4444444f
        f44444444444444444444444444f
        .ffffffffffffffffffffffffff.
        `, SpriteKind.Upgrade)
    PopUp1upg.setPosition(110, 30)
    PopUp1upg.setFlag(SpriteFlag.Invisible, true)
    PopUp1upg.setFlag(SpriteFlag.Ghost, true)
    PopUp1upg.z = 85
}
sprites.onOverlap(SpriteKind.chicken, SpriteKind.Point3, function (sprite, otherSprite) {
    if (house1chickens < MaxCH1) {
        sprite.vx = 0
        sprite.vy = -55
    } else {
        if (house2chickens < 25) {
            pause(200)
        } else {
            sprite.vx = 0
            sprite.vy = -55
        }
    }
})
function upgradeHouse1 () {
    MaxCH1 += 40
    sprites.setDataNumber(house1, "level", sprites.readDataNumber(house1, "level") + 1)
    house1.setImage(house1IMG[sprites.readDataNumber(house1, "level")])
    statsH1.value = Math.map(house1chickens, 0, MaxCH1, 0, 100)
}
sprites.onOverlap(SpriteKind.chicken, SpriteKind.Point1, function (sprite, otherSprite) {
    sprite.vx = 0
    sprite.vy = -55
})
let statsH1: StatusBarSprite = null
let house1IMG: Image[] = []
let rallyPoint4: Sprite = null
let rallyPoint3: Sprite = null
let rallyPoint2: Sprite = null
let rallyPoint1: Sprite = null
let PopUp1upg: Sprite = null
let PopUp1X: Sprite = null
let house1popUp: Sprite = null
let house1: Sprite = null
let MaxCH1 = 0
let house1chickens = 0
let pointer: Sprite = null
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
    ffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777777777777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777777777777777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
clickr.setPosition(40, 105)
createHouse1()
createHouse2()
createRallyPoints()
createPopUps()
createPointer()
