let Quiz = 0
let question_1 = 1
let question_2 = 2
let question_3 = 3
let question_4 = 4
let question_5 = 5
function right() {
    if (true) {
        basic.showLeds(`
            . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
                        . . . . .
        `)
    }
    
}

function wrong() {
    if (true) {
        basic.showLeds(`
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        `)
    }
    
    game.gameOver()
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    Quiz = randint(1, 5)
    basic.showNumber(Quiz)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (Quiz == question_1) {
        right()
    }
    
    if (Quiz == question_2) {
        wrong()
    }
    
    if (Quiz == question_3) {
        wrong()
    }
    
    if (Quiz == question_4) {
        right()
    }
    
    if (Quiz == question_5) {
        wrong()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (Quiz == question_1) {
        wrong()
    }
    
    if (Quiz == question_2) {
        right()
    }
    
    if (Quiz == question_3) {
        right()
    }
    
    if (Quiz == question_4) {
        wrong()
    }
    
    if (Quiz == question_5) {
        right()
    }
    
})
