import sys, os, random

random.seed()

def coinconverter(num, coinlist):
    counter = 0
    coin_counter = [0] * len(coinlist)
    flag = False
    #Currently not quitting this while loop correctly
    while num != 0:

        while num >= 0:
            num -= coinlist[counter]
            coin_counter[counter] += 1
            flag = True

        if flag:
            num += coinlist[counter]

        flag = False
        coin_counter[counter] -= 1
        counter += 1
    return coin_counter

def stringcomb(string):
    length = len(string)
    temp_string = string
    flags = [0]*len(string)
    #i is number of letters of the current combination
    i = 0
    while i < len(string):
        pass

def whilechallenge():
    os.system('clear')
    flag = True
    counter = 1
    usr_input = 'N'
    while flag:
        usr_input = input('Do you want to risk to double your score? [Y/N] ')
        usr_input.upper()
        print(flag)


        if usr_input == 'Y' or usr_input == 'y':
            rand = random.randrange(100)
            if counter == 0:
                if rand <= 75:
                    counter = 1
                    print ('Congrats! Double points!')
                else:
                    print ('Congrats! You lost!')
                    flag = False
            elif counter != 0:
                if rand <= 75:
                    counter = counter * 2
                    print ('Congrats! Double points!')
                else:
                    print ('Congrats! You lost!')
                    counter = 0
        elif usr_input == 'N' or usr_input == 'n':
            flag = False
        else:
            print ('Wrong input. Try again.')

        print('Your current score is: ', counter)




#Main structure to pull up other functions
args = sys.argv
if args[1] == '-while':
    whilechallenge()
    print ('Game Over')

try:
    if args[1] == '-h':
        print ('Help')
        print ('*********************')
        print ('-h \t \t \t \t Get help')
        print ('-cc \t \t \t \t Converts raw numbers to coins specified')
        print ()
    if args[1] == '-cc':
        number_raw      = float(input('Please input a number: '))
        possible_coins  = [int(x) for x in input('Please input available coins: ').split()]
        print ('Results are: ')
        number = int(number_raw*100)
        coins  = coinconverter(number, possible_coins)
        for i in range(len(possible_coins)):
            print (possible_coins[i], '\t', coins[i])

except:
	print ('-h to get some help')

sys.exit()
