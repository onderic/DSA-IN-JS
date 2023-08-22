// recursion
function factorial(n){
    if( n===0 || n===1){
        return 1
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n-1)
}

// function factorial(n){
//     let result = 1

//     for (i=2; i<=n; i++){
//         result = result * i
//     }
//     return result
// }

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(8))

// Big O
// O(n) --linear time