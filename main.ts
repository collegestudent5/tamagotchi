basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
let knuffel = 20
let voeding = 20
let dood = 0
loops.everyInterval(1000, function () {
    knuffel += -1
})
loops.everyInterval(1000, function () {
    voeding += -1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        knuffel += 5
    }
    if (input.buttonIsPressed(Button.A)) {
        voeding += 5
    }
})
