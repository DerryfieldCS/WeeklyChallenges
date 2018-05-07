function isSubStr (str, pattern){
    var arrStr = str.split("");
    var arrPatt = pattern.split("");
    var match = 0;
    for (i = 0; i <= arrStr.length - arrPatt.length; i++){
        match = 1;
        for (n = 0; n <= arrPatt.length - 1; n++){
            if (arrStr[i+n] != arrPatt[n]){
                match = 0;
            }
        }
        if (match == 1){
            return 1;
        }
    }
    return 0;
}

alert (isSubStr("I am a happy dog, and you are a lazy fox.","Hamster"));