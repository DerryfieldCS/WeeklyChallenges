import sys
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

if args[1] == '-sc':
    string = input('Please input a string: ')
    print (stringcomb(string))

#Main structure to pull up other functions
try:
    args = sys.argv
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
	print ('Get some help')

sys.exit()
