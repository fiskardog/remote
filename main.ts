bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    connState = 1
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connState = 0
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString(" ")
    basic.showString(" ")
})
input.onButtonPressed(Button.AB, function () {
    if (connState == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(".")
    basic.showString(".")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    keyboard.sendString("Z")
    basic.showString("Z")
})
let connState = 0
basic.showIcon(IconNames.Heart)
keyboard.startKeyboardService()
basic.forever(function () {
	
})
