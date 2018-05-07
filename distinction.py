words = []
userinp = input("Enter a word: ")
while userinp not in words:
    words.append(userinp)
    userinp = input("Another word: ")

print("You entered " + str(len(words)) + " distinct words.")
print("Words you entered: \n" + '\n'.join(words))
