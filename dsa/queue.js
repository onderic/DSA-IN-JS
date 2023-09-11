// Define a class called Queue
class Queue {
    // Constructor initializes an empty array to store queue elements
    constructor() {
        this.items = [];
    }

    // Method to add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove and return the first element from the queue
    dequeue() {
        return this.items.shift();
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to view the first element in the queue without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    // Method to get the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Method to print the elements of the queue as a comma-separated string
    print() {
        console.log(this.items.toString());
    }
}

// Create an instance of the Queue class
const queue = new Queue();

// Check if the queue is initially empty and print the result
console.log(queue.isEmpty());

// Add some elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// Print the elements of the queue
queue.print();

// Remove and print the first element from the queue
console.log(queue.dequeue());

// Get and print the number of elements in the queue
console.log(queue.size());

// Peek at the first element in the queue without removing it
console.log(queue.peek());
