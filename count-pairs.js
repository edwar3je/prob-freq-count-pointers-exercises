// add whatever parameters you deem necessary
function countPairs(arr, sum) {
    let currentIdx = 0;
    let hop = 1;
    const pairs = [];
    while(hop < arr.length){
        if((currentIdx + hop) > arr.length){
            currentIdx = 0;
            hop++;
        } else {
            let result = arr[currentIdx] + arr[currentIdx + hop];
            if(result === sum){
                pairs.push([arr[currentIdx], arr[currentIdx + hop]])
            }
            currentIdx++
        }
    }
    return pairs.length;
}
