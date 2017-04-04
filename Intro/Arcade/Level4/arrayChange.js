function arrayChange(inputArray) {
    var out = 0;
    for(var i = 1, l = inputArray.length; i < l; i++){
        while(inputArray[i - 1] >= inputArray[i]){
            ++out;
            inputArray[i] += 1;
        }
    }
    return out;
}

arrayChange([-1000, 0, -2, 0]);