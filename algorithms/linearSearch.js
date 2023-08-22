function linearSearch(arr,target){
    for(let i= 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return "not found!"
}

console.log(linearSearch([1,2,4,5,10],24))
console.log(linearSearch([1,2,4,5,10],10))
console.log(linearSearch([1,2,4,5,10],4))