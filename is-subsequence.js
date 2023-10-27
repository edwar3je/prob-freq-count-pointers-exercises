// add whatever parameters you deem necessary

function isSubsequence(characters, string) {
    let characterPosition = 0;
    let stringPosition = 0;
    while(stringPosition < string.length){
        if(string[stringPosition] === characters[characterPosition]) characterPosition++;
        stringPosition++
    }
    if(characterPosition === characters.length){
        return true
    }
    return false
}