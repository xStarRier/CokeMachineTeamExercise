function buyCoke() {
    for (let coinIndex in coinsInMachine) { coinsInMachine[coinIndex] += coinsInserted[coinIndex]; }
    let moneyInMachine = valueFromCoinCounts(coinsInMachine);
    let insertedMoney = valueFromCoinCounts(coinsInserted);

     if (insertedMoney >= 25) { isCokeInDelivery = true; }
     else { isCokeInDelivery = false; }

    let changeAmount = insertedMoney - 25;
    cokesInStore--;
    coinsReturned = createChangeArray(changeAmount);
    coinsInserted = [0, 0, 0, 0];
    if (cokesInStore == 0) { errorMessage = "SOLD OUT!" }
    updateView();

}

function checkDisabledButtons() {
    if (canIbuyCola()) { setButtonDisabled("buyButton"); }
    if (isCokeInDelivery == false) { setButtonDisabled("takeColaButton"); }
    if (valueFromCoinCounts(coinsInserted) == 0) { setButtonDisabled("returnCoinsButton"); }
    if (valueFromCoinCounts(coinsReturned) == 0) { setButtonDisabled("takeCoinsButton"); }
}

function setButtonDisabled(buttonId) {
    document.getElementById(buttonId).setAttribute("disabled", "true");
}

function canIbuyCola() {
    if (valueFromCoinCounts(coinsInserted) <= 24 || cokesInStore <= 0 || isCokeInDelivery == true)

        return true;
    else

        return false;
}
 
function createChangeArray(changeAmount) {
    let 
        changeArray = [0, 0, 0, 0];
    for (let i = 3; i >= 0; i--) {
        while (changeAmount >= coinValueFromIndex(i) && coinsInMachine[i] > 0) {
            changeArray[i]++;
            changeAmount -= coinValueFromIndex(i);
            coinsInMachine[i]--;
    }}

    return changeArray;
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
