serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    basic.showNumber(input.lightLevel())
})
