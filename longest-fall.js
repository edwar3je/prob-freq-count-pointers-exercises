// add whatever parameters you deem necessary
function longestFall(arr) {
    if(arr.length === 0) return 0;
    if(arr.length === 1) return 1;
    let maxFall = 1;
    let workingFall = [arr[0]];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            workingFall.push(arr[i + 1]);
            if(workingFall.length > maxFall){
                maxFall = workingFall.length
            }
        }
        else {
            workingFall = [arr[i + 1]]
        }
    }
    return maxFall
}