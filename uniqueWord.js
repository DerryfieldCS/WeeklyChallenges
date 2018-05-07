function uniqueWord () {
    var newWord;
    var existWord = [];
    var repeat = 0;
    while (1){
        console.log("Please enter a word");
        newWord = getWord();//there is no scanf in javascript :( This is a pseudo function
        for (let i = 0; i <= existWord.length - 1; i++){
            if (newWord == existWord[i]){
                console.log("Repeat word detected!");
                repeat = 1;
            }
        }
        if (repeat){
            break;
        }else{
            existWord.push(newWord);
        }
    }
    console.log(existWord.join(", "));
}