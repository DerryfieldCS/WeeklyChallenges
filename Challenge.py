import sys

def distinctwords():
    sig = True
    tempwd = ''
    wdlst  = ['']
    while sig:
        tempwd = input('Please input a word: ')
        if tempwd in wdlst:
            sig = False
            print ('Repitition detected.')
        else:
            sig = True
            wdlst.append(tempwd)
            tempwd = ''

    wdlst.pop(0)
    term_counts = len(wdlst)
    return term_counts

def invariant(var, lst):
    rst = False
    tempstr = ''
    for i in range(len(lst)-len(var)):
        tempstr = ''
        for j in range(i, i+len(var)):
            tempstr = tempstr + lst[j]
        if var == tempstr:
            rst = True
            break
        else:
            rst = False

    return rst

flag = input('which part of the challenge do you want access to? a for distinct words, b for in function. ')
if flag == 'a':
    print (distinctwords())
elif flag == 'b':
    var = input('Please input a string. ')
    lst = input('Please input a string. ')
    print (invariant(var, lst))
