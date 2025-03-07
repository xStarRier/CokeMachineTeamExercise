function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <div class="flexVertical">
            <div class="flexHorizontal">
                <div class="automat">
                    <h1> Coca Cola-automat - pris: 25kr</h1>
                    <div class="innmat">
                        ${getCoinsHtml(coinsInMachine)}
                        <div class="cokes">
                            ${repeatImgDivHtml('coke', 'coke', cokesInStore)}
                        </div>
                        <div>
                            Mynter puttet på av kunde: ${valueFromCoinCounts(coinsInserted)}kr
                            ${getCoinsHtml(coinsInserted)}
                        </div>
                    </div>
                </div>            
                <div>
                    Mynt- og cola-utkast: ${valueFromCoinCounts(coinsReturned)}kr
                    ${getCoinsHtml(coinsReturned)}
                    ${repeatImgDivHtml('coke', 'coke', isCokeInDelivery ? 1 : 0)}
                </div>
            </div>
            <div style="color: red" p>${errorMessage}</div>
            <div class="flexVertical">
            <div class="flexHorizontal">
                <svg xmlns="http://www.w3.org/2000/svg" width="170" height="240" version="1.0">
                    <path d="m289.706 466.48 55.882 16.47 51.47-17.353M305 576.186l40.882-60.294 31.765 59.705M345.91 516v-64.367" style="fill:none;fill-opacity:.75;fill-rule:evenodd;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" transform="translate(-258.382 -359.686)"/>
                    <path transform="translate(-236.03 -372.097)" d="M361.499 429.939a37.283 34.341 0 1 1-74.566 0 37.283 34.341 0 1 1 74.566 0z" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:100;stroke-dasharray:none;stroke-opacity:1"/>
                    <path transform="translate(-245.502 -378.934)" d="M330.175 429.939a5.96 5.96 0 1 1-11.918 0 5.96 5.96 0 1 1 11.918 0z" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:100;stroke-dasharray:none;stroke-opacity:1"/>
                    <path transform="translate(-225.943 -378.934)" d="M330.175 429.939a5.96 5.96 0 1 1-11.918 0 5.96 5.96 0 1 1 11.918 0z" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:100;stroke-dasharray:none;stroke-opacity:1"/>
                    <path transform="rotate(-1.79 -12147.887 7779.517)" d="M344.352 455.71a31.228 33.718 0 0 1-39.995.25" style="opacity:1;fill:none;fill-opacity:1;fill-rule:nonzero;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:100;stroke-dasharray:none;stroke-opacity:1"/>
                    
                    <span class="flexHorizontal">${repeatImgDivHtml('coke', 'coke', boughtCokeBottles)}</span>
               
                </svg>  
            </div>      
                
                
                <div class="flexHorizontal">
                             <button onclick="insertCoin(1)"><img src="img/1kr.png" style="width: 50px; height: 50px;cursor: pointer;"> </button>
                    <button onclick="insertCoin(5)"><img src="img/5kr.png" style="width: 50px; height: 50px; cursor: pointer; "></button>
                    <button onclick="insertCoin(10)"><img src="img/10kr.png" style="width: 50px; height: 50px;cursor: pointer;"></button>
                    <button onclick="insertCoin(20)"><img src="img/20kr.png" style="width: 50px; height: 50px;cursor: pointer;"></button>
                    <button id= "returnCoinsButton" onclick="returnCoins()">Angre</button>
                    <button id= "takeCoinsButton" onclick="takeCoins()">Ta myntene</button>
                    <button id= "buyButton" onclick="buyCoke()">Kjøpe cola</button>
                    <button id= "takeColaButton" onclick ="takeCoke()">Ta cola</button>
                    <div id="alertmessage"></div>
                </div>
            </div>
        </div>
        
    `;
    checkDisabledButtons();
}

function getCoinsHtml(coinCounts) {
    return /*HTML*/`
        <div class="coins">
            <div>${repeatImgDivHtml('coin', '1kr', coinCounts[0])}</div>
            <div>${repeatImgDivHtml('coin', '5kr', coinCounts[1])}</div>
            <div>${repeatImgDivHtml('coin', '10kr', coinCounts[2])}</div>
            <div>${repeatImgDivHtml('coin', '20kr', coinCounts[3])}</div>            
        </div>
    `;
}

function repeatImgDivHtml(cssClass, image, count) {
    return /*HTML*/`<div class="${cssClass}"><img src="img/${image}.png"/></div>`.repeat(count);
}