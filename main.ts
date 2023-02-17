input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 180; index++) {
        servos.P0.setAngle(index)
        basic.pause(20)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 180; index++) {
        servos.P0.setAngle(180 - index)
        basic.pause(20)
    }
})
servos.P0.setAngle(0)
basic.forever(function () {
	
})
