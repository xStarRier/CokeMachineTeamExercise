function buyCoke() {
    for (let coinIndex in coinsInMachine) { coinsInMachine[coinIndex] += coinsInserted[coinIndex]; }
    let moneyInMachine = valueFromCoinCounts(coinsInMachine);
    let insertedMoney = valueFromCoinCounts(coinsInserted);

    if (insertedMoney >= priceofcoke) { isCokeInDelivery = true; }
    else { isCokeInDelivery = false; }

    let changeAmount = insertedMoney - priceofcoke;
    cokesInStore--;
    coinsReturned = calculateChangeAmounts(changeAmount);
    payChangeMoneyToCustomer(coinsReturned);
    coinsInserted = [0, 0, 0, 0];
    if (cokesInStore == 0) { errorMessage = "SOLD OUT!" }
    updateView();

}

function checkDisabledButtons() {
    if (!canBuyCoke()) { setButtonDisabled("buyButton"); }
    if (isCokeInDelivery == false) { setButtonDisabled("takeColaButton"); }
    if (valueFromCoinCounts(coinsInserted) == 0) { setButtonDisabled("returnCoinsButton"); }
    if (valueFromCoinCounts(coinsReturned) == 0) { setButtonDisabled("takeCoinsButton"); }
}

function setButtonDisabled(buttonId) {
    document.getElementById(buttonId).setAttribute("disabled", "true");
}

function canBuyCoke() {
    if (valueFromCoinCounts(coinsInserted) <= 24 ||
        cokesInStore <= 0 ||
        isCokeInDelivery == true ||
        !checkIfMachineHasChange(coinsInMachine, calculateChangeAmounts(valueFromCoinCounts(coinsInserted) - priceofcoke)))

        return false;
    else

        return true;
}

function calculateChangeAmounts(changeAmount) {
    let
        changeAmounts = [0, 0, 0, 0];
    for (let i = 3; i >= 0; i--) {
        if (coinsInMachine[i] > 0) {
            let coinsAmount = coinsInMachine[i];
            while (changeAmount >= coinValueFromIndex(i) && coinsAmount > 0) {
                changeAmounts[i]++;
                changeAmount -= coinValueFromIndex(i);
                coinsAmount--;
            }
        }
    }

    return changeAmounts;
}

function payChangeMoneyToCustomer(coinsReturned) {
    for (let i = 0; i < 4; i++) {
        coinsInMachine[i] -= coinsReturned[i];
    }
}

function checkIfMachineHasChange(coinsInMachine, changeAmounts) {
    if (valueFromCoinCounts(coinsInMachine) == 0 && (valueFromCoinCounts(coinsInserted) - priceofcoke) > 0) {
        return false;
    }
    if (valueFromCoinCounts(changeAmounts) < (valueFromCoinCounts(coinsInserted) - priceofcoke)) {
        return false;
    }
    for (let i = 0; i < 4; i++) {
        if (coinsInMachine[i] < changeAmounts[i]) {
            return false;
        }
    }
    return true;
}

function insertCoin(value) {
    coinsInserted[coinIndexFromValue(value)]++;
    updateView();
}

function returnCoins() {
    let tempCoinsReturned = [...coinsInserted];
    for (let coinIndex in coinsReturned) {
        coinsReturned[coinIndex] += tempCoinsReturned[coinIndex];
    }
    coinsInserted = [0, 0, 0, 0];
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}

function takeCoke() {
    boughtCokeBottles += isCokeInDelivery ? 1 : 0;
    isCokeInDelivery = false;
    updateView();
}
