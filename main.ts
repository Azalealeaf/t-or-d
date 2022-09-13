input.onButtonPressed(Button.A, function () {
    number = randint(0, 2)
    if (number == 1) {
        basic.showString("Truth")
    }
    if (number == 2) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    Arrow = randint(0, 4)
    if (Arrow == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (Arrow == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
    }
    if (Arrow == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    }
    if (Arrow == 4) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let Arrow = 0
let number = 0
basic.showString("T or D")
basic.forever(function () {
	
})
