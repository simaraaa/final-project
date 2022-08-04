Quiz = 0

question_1=1
question_2=2
question_3=3
question_4=4
question_5=5
def right():
    if True:
        basic.show_leds("""
            . . . . #
                        . . . # .
                        # . # . .
                        . # . . .
                        . . . . .
        """)
def wrong():
    if True:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
    game.game_over()

def on_button_pressed_ab():
    global Quiz
    Quiz = randint(1, 5)
    basic.show_number(Quiz)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_a():
    if Quiz == question_1:
        right()
    if Quiz == question_2:
        wrong()
    if Quiz == question_3:
        wrong()
    if Quiz == question_4:
        right()
    if Quiz == question_5:
        wrong()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if Quiz == question_1:
        wrong()
    if Quiz == question_2:
        right()
    if Quiz == question_3:
        right()
    if Quiz == question_4:
        wrong()
    if Quiz == question_5:
        right()
input.on_button_pressed(Button.B, on_button_pressed_b)


    

