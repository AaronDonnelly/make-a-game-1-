let score = 0
let score_a = 0
input.onButtonPressed(Button.A, function () {
    score += 1
})
input.onButtonPressed(Button.AB, function () {
    score_a = 0 - 1
})
input.onButtonPressed(Button.B, function () {
    score_a += 2
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showNumber(score_a)
})
