function factorial(n){
    let result = 1
    console.log(`Calculating factorial(${n})`);

    for (i=2; i<=n; i++){
        console.log(`Multiplying result (${result}) by ${i}`);
        result = result * i
    }
    return result
}

console.log(factorial(0))
console.log(factorial(4))
console.log(factorial(5))
console.log(factorial(8))

// Big O
// O(n) --linear time