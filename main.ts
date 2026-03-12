let yVal = 0
let xVal = 0
let x = 2
let y = 2
basic.forever(function () {
    xVal = pins.analogReadPin(AnalogPin.P0)
    yVal = pins.analogReadPin(AnalogPin.P1)
    // LEFT / RIGHT
    if (xVal > 600) {
        x = x + 1
    }
    if (xVal < 400) {
        x = x - 1
    }
    // UP / DOWN
    if (yVal > 600) {
        y = y + 1
    }
    if (yVal < 400) {
        y = y - 1
    }
    // keep pixel inside screen
    if (x < 0) {
        x = 0
    }
    if (x > 4) {
        x = 4
    }
    if (y < 0) {
        y = 0
    }
    if (y > 4) {
        y = 4
    }
    basic.clearScreen()
    led.plot(x, y)
    basic.pause(150)
})
