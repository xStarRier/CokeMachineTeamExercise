function valueFromCoinCounts(coinCounts) {
    return coinCounts[0]
        + coinCounts[1] * 5
        + coinCounts[2] * 10
        + coinCounts[3] * 20;
}

function coinValueFromIndex(index){
    const values = [1, 5, 10, 20];
    return values[index];
}

function coinIndexFromValue(value){
    const values = [1, 5, 10, 20];
    for(let valueIndex in values){
        if (values[valueIndex] == value)
            return valueIndex;
    }
}

function initModel() {
    coinsInMachine = [0, 0, 0, 0];
    coinsInserted = [0, 0, 0, 0];
    coinsReturned = [0, 0, 0, 0];
    cokesInStore = 5;
    isCokeInDelivery = false;
}