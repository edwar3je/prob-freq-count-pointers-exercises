// add whatever parameters you deem necessary
function separatePositive(arr) {
    let moves = 0;
    let maxMoves = arr.length;
    let currentPosition = 0;
    while(moves < maxMoves){
        let currentValue = arr[currentPosition];
        if(currentValue > 0){
            currentPosition++;
        } else {
            arr.push(currentValue);
            arr.splice(currentPosition, 1);
        }
        moves++;
    }
    return arr;
}
