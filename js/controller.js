function buyCoke() {
    let valueInserted = valueFromCoinCounts(coinsInserted);
    let valueToReturn = valueInserted - 25;
    if (valueInserted < 25) {
        errorMessage = 'Ikke nok penger';
        return;
    }
    if (!giveChangeAndReturnIsSuccess(false, valueToReturn)) {
        errorMessage = 'Automaten har ikke returmynter';
        return;
    }
    giveChangeAndReturnIsSuccess(true, valueToReturn);
    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}

function giveChangeAndReturnIsSuccess(actuallyDoIt, amount) {
    for (let i = coinsInMachine.length - 1; i >= 0; i--) {
        let coinValue = coinValueFromIndex(i);
        let coinCountNeeded = Math.floor(amount / coinValue);
        let coinCountInMachine = coinsInMachine[i];
        let coinCount = coinCountInMachine < coinCountNeeded ? coinCountInMachine : coinCountNeeded;
        amount -= coinValue * coinCount;
        if (actuallyDoIt) {
            coinsReturned[i] += coinCount;
            coinsInMachine[i] -= coinCount;
        }
    }
    return amount == 0;
}

function insertCoin(value) {
    const index =
        value == 1 ? 0 :
            value == 5 ? 1 :
                value == 10 ? 2 :
                    value == 20 ? 3 :
                        null;
    coinsInserted[index]++;
    updateView();
}

function returnCoins() {
    coinsReturned = [...coinsInserted];
    coinsInserted = [0, 0, 0, 0];
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}
