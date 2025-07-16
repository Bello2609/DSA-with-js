function makeChange(origAmt, coins){
    let remainAmt = 0;
    if(origAmt % 0.25 < origAmt){
        coins[3] = parseInt(origAmt / 0.25);
        remainAmt = origAmt % 0.25;
        origAmt = remainAmt;
    }
    if(origAmt % 0.1 < origAmt){
        coins[2] = parseInt(origAmt / 0.1);
        remainAmt = origAmt % 0.1;
        origAmt = remainAmt;
    }
    if(origAmt % 0.05 < origAmt){
        coins[1] = parseInt(origAmt / 0.05);
        remainAmt = origAmt % 0.05;
        origAmt = remainAmt;
    }
    coins[0] = parseInt(origAmt / 0.01);
}

function showChange(coins){
    if(coins[3] > 0){
        console.log("Number of quaters - " + coins[3] + " - " + coins[3] * 0.25);
    }
    if(coins[2] > 0){
        console.log("Number of quaters - " + coins[2] + " - " + coins[2] * 0.10);
    }
    if(coins[1] > 0){
        console.log("Number of quaters - " + coins[1] + " - " + coins[1] * 0.05);
    }
    if(coins[0] > 0){
        console.log("Number of quaters - " + coins[0] + " - " + coins[0] * 0.01);
    }
}
let origAmt = .63;
let coins = [];
console.log(makeChange(origAmt, coins));
console.log(showChange(coins));




function ksack(values, weights, capacity) {
    var load = 0;
    var i = 0;
    var w = 0;
    while (load < capacity && i < 4) {
        if (weights[i] <= (capacity-load)) {
            w += values[i];
            load += weights[i];
        }
        else {
            var r = (capacity-load)/weights[i];
            w += r * values[i];
            load += weights[i];
        }
        ++i;
    }
    return w;
}
let items = ["A", "B", "C", "D"];
let values = [50, 140, 60, 60];
let weights = [5, 20, 10, 12];
let capacity = 30;
console.log(ksack(values, weights, capacity));