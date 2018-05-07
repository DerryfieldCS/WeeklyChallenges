function isPalin (str){
    if (str.length <= 1){
        return 1;
    }else{
        var strArr = str.toLowerCase().split("");
        var start = 0;
        var end = strArr.length - 1;
        if (strArr[start] == strArr[end] && isPalin(strArr.slice(1,end).join(""))){
            return 1;
        }else{
            return 0;
        }
    }
}

alert (isPalin("I eat tae i"));