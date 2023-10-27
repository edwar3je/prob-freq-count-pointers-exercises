// add whatever parameters you deem necessary
function makeFreqCounter(arr){
    const freqCounter = {};
    for(let i=0; i < arr.length; i++){
        freqCounter[i] = arr[i]
    }
    return freqCounter;
}

function twoArrayObject(keys, values) {
    const newObj = {};
    const keyFreq = makeFreqCounter(keys);
    const valueFreq = makeFreqCounter(values);
    for(let key in keyFreq){
        if(valueFreq[key]){
            newObj[keyFreq[key]] = valueFreq[key]
        }
        else{
            newObj[keyFreq[key]] = null
        }
    }
    return newObj;
}