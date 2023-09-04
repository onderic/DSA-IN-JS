const arr = [1,2,3,'onderi']
const fruits = ['apple', 'banana'];
arr.push(4)
arr.unshift(0)
arr.pop()
arr.shift()

arr.splice(0,1,'kiwi', 'strawberry')
const all = arr.concat(fruits)

// console.log(arr[0])


for(const item of all){
    console.log(item)
}


const numbers = [1, 2, 3,4,5];
const squaredNumbers = numbers.map((num) => num * num );
console.log(squaredNumbers)

const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

// time complexities

// insert/remove from end = O(1) constant
// insert/remove from beginning = O(n) linear
// Access = O(1) constant
// Search = O(n) linear
// Push/Pop = O(1) constant

// Shift/unshift/concat/slice/splice =  O(n) linear

// forEach/map/filter/reduce =  O(n) linear