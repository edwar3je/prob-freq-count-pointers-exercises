// add whatever parameters you deem necessary
function addValues(arr){
    let total = 0;
    for(let a of arr){
        total += a
    }
    return total
}

function pivotIndex(arr) {
    if(arr.length <= 2) return -1;
    let pivotIndex = -1;
    let currentIndex = 1;
    while(pivotIndex === -1 && currentIndex < (arr.length - 1)){
        let left = arr.slice(0, currentIndex);
        let right = arr.slice(currentIndex + 1);
        addValues(left) === addValues(right) ? pivotIndex = currentIndex : currentIndex++ 
    }
    return pivotIndex
}