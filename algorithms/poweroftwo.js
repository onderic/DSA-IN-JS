function ispowerOfTwoBitwise(n){
    if (n<1){
        return false
    }
    return (n & (n-1)) === 0
}

// function ispowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n % 2 !==0 ){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }

console.log(ispowerOfTwoBitwise(-1))
console.log(ispowerOfTwoBitwise(2))
console.log(ispowerOfTwoBitwise(5))
console.log(ispowerOfTwoBitwise(16))