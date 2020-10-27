let drehzahl = 0
basic.forever(function () {
    drehzahl = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P2, drehzahl)
    basic.showNumber(drehzahl)
})
