input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("- - E - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("- D - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
