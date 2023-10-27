// add whatever parameters you deem necessary
function makeFreqCounter(string) {
    const freqCounter = {};
    const arrString = Array.from(string);
    for(let letter of arrString){
        if(freqCounter[letter]){
            freqCounter[letter]++
        }
        else {
            freqCounter[letter] = 1
        }
    }
    return freqCounter;
}

function constructNote(message, letters) {
    if(message === "") return true;
    if(message.length > letters.length) return false;
    const messageFreq = makeFreqCounter(message);
    const letterFreq = makeFreqCounter(letters);
    for(let key in messageFreq){
        if(!letterFreq[key] || messageFreq[key] > letterFreq[key]) return false;
    }
    return true;
}
