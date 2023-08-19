class Stack {
    constructor (){
        this.items = [];
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        if (!this.isEmpty()){
            return this.items.pop();
        }
        return null
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    serch(item){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i] === item){
                return i;
            }
        }
        return -1;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.pop());
// console.log(stack.push(50));
console.log(stack.peek());
console.log(stack.size());
console.log("search term",stack.serch(30))