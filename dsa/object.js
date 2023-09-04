const obj = {
    name: 'onderi',
    age: 24,
    "key-three": true,
    sayMyName: function(){
        console.log(this.name)
    }
}
obj.hobby = "netball"
delete obj.hobby


console.log(obj['age'])
console.log(obj['key-three'])



obj.sayMyName()

const keys = Object.keys(obj)
console.log(keys)

const values = Object.values(obj)
console.log(values)

const entrie = Object.entries(obj)
console.log(entrie)


// insert = O(1) constant
// remove = O(1) constant
// access = O(1) constant
// search = O(n) linear
// object.keys/object.values/object.entries = O(n) linear 