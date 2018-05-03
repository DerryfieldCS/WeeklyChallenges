/*
Author: James
Date: 2018/5/3
Dependencies: arrSort.js
Description: Two arguments, the first one is the amount of money, the second one is a array that contains the value of all types of coins. Returns a array, its first element is the coins and the second element is the remainder.
*/

function coins(money, coinSet) {
    var remain = money;
    var result = [];
    var remainder = 0;
    var sCoinSet = arrSort(coinSet);
    var curIndex = 0;
    while(1){
        var curCoin = sCoinSet[curIndex];
        if (remain < curCoin){
            if (curIndex == sCoinSet.length-1){
                remainder = remain;
                break;
            }else{
                curIndex++
            }
        }else{
            result.push(curCoin);
            remain -= curCoin;
        }
    }
    return [result, remainder];
}

