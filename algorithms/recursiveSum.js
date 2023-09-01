function recursiveSum(arr,index){
    // base case
    if(index === arr.length -1){
        return arr[index];
    }
    // recursive case
    return arr[index] + recursiveSum(arr,index + 1)
}

const numbers = [1,2,3,4,5]
console.log(recursiveSum(numbers,0))