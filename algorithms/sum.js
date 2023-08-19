function summation(n){
    let sum = 0;
    let numbers = []
    for (let i=1; i<=n; i++){
        sum +=1
        numbers.push(i)
    }
    return {sum,numbers}
}

let n = 5

let result = summation(n);

console.log("Sum", result)
console.log("Numbers:", result.numbers);