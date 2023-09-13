class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
}

const list = new linkedList()
console.log('List is Empty?',list.isEmpty())
console.log("List size:",list.getSize())
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)