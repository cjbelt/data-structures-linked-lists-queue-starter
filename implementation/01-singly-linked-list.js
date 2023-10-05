// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const node = new SinglyLinkedNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(n): it traverses every element in the array

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }

    removeFromHead() {
        // Remove node at head

        if (this.length > 0) {
            const removed = this.head;
            this.head = this.head.next;
            this.length--;
            return removed;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1): it changes the head property to the next element in the list
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 1) {
            this.head = null;
        }

        let curr = this.head;
        let prev = {};

        while(curr && curr.next) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;

        if (this.length > 0) {
            this.length--;
            return curr;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n): it traverses every element in the list

    }

    peekAtHead() {
        // Return value of head node
        if (this.head) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1): it just returns the head value
    }

    print() {
        // Print out the linked list
        if (this.head) {
            let curr = this.head;

            while(curr) {
                console.log(`${curr.value}`);
                curr = curr.next;
            }

            console.log("NULL");
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n): it traverses every element in the list
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
