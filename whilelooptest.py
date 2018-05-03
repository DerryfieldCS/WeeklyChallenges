# this is the final version

import random
score = 1  # start score with a nonzero
userinput = input("Start game? (y/n): ")  # get an initial input

while userinput == "y":
    num = random.randint(1, 4)  # generate a random int and check it
    if num == 1:
        score = 0

    else:
        score *= 2

        if score != 0:
            print("\nScore = " + str(score))
            userinput = input("Test your luck? (y/n): ")

    if score == 0:  # if they lost, change userinput to not trigger any events
        print("\nOops, unlucky! Game Over!")
        userinput = "gg"

    if userinput == "n":  # if they cash out, print their final score
        print("\nYour final score was " + str(score) + ".")
