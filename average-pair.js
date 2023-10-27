// add whatever parameters you deem necessary
function average(num1, num2){
    let sum = num1 + num2;
    return sum / 2
}

function averagePair(arr, avg) {
    if(arr.length === 0) return false;
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        if(average(arr[left], arr[right]) === avg) return true;
        else if(average(arr[left], arr[right]) < avg) left++;
        else if(average(arr[left], arr[right]) > avg) right--;
    }
    return false;
}