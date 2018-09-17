input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        . # . # .
        . . # . .
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . # . #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . .
        # . . . .
        # # # # #
        `)
})
basic.forever(() => {

})
