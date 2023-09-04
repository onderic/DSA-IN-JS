const set = new Set([1,2,3])
set.add(4)
console.log(set.has(4))
console.log(set.size)
set.delete(3)
set.clear()

for(const item of set ){
    console.log(item)
}