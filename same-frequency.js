// add whatever parameters you deem necessary
function makeFreqCounter(num){
    const freqCounter = {};
    const numString = String(num);
    const arr = Array.from(numString);
    for(let a of arr){
        freqCounter[a] ? freqCounter[a]++ : freqCounter[a] = 1
    }
    return freqCounter;
}

function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false;
    const firstFreq = makeFreqCounter(num1);
    const secondFreq = makeFreqCounter(num2);
    for(let key in firstFreq){
        if(!secondFreq[key] || firstFreq[key] !== secondFreq[key]) return false;
    }
    return true;
}