let drehzahl = 0
basic.forever(function () {
    drehzahl = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P2, drehzahl)
    if (drehzahl > 0 && drehzahl < 200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        if (drehzahl >= 200 && drehzahl < 400) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                # # # # #
                `)
        }
    } else {
        music.playMelody("C D D G E D C - ", 120)
    }
})
