// recursion
function fibonacci(n){
    if(n < 2){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}


// function fibonacci(x){
//     const fib = [0,1]
//     for(i=2; i<x; i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }


console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))

// Big O
// O(n) --linear time