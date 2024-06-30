bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    keyboard.sendString(" ")
    basic.showString(" ")
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(".")
    basic.showString(".")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    keyboard.sendString("Z")
    basic.showString("Z")
})
basic.showIcon(IconNames.Heart)
keyboard.startKeyboardService()
basic.forever(function () {
	
})
