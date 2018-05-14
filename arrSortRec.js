function arrSort2 (arr){
    if (arr.length <= 1){//If there is equal to or less than one element, return the array
        return arr;
    }
    let endIndex = arr.length - 1;
    for (let i = 0; i <= endIndex; i++){//sort the array so that the largest element is at the end
        if (i != endIndex){
            if (arr[i] > arr[i+1]){
                let tmp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = tmp;
            }
        }
    }
    arr.splice(0, arr.length - 1, arrSort2(arr.slice(0, arr.length - 1)));
    return arr;
}

