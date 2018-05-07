
import Foundation
var wordsUsed = [String]()
var word = ""
var stop = 0
while stop != 1{
    
    if wordsUsed.contains(word){
        stop = 1
        print("You have already used \(word) dumby")
    }
    else{
        wordsUsed.append(word)
        print("You have input \(wordsUsed)")
    }
    word = readLine(strippingNewline: true)!
    
}
