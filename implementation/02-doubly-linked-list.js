// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // O(1)

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this.head;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.head = newNode;
        }



        this.length++;

        return this.tail;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) {
            return;
        }

        const removed = this.head;

        if (this.length > 1) {
            this.head.next.prev = null;
            this.head = this.head.next;
            this.length--;

            return removed.value;
        } else if (this.length === 1) {
            this.tail = null;
            this.head = null;
            this.length--;
            return removed.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) {
            return;
        }

        const removed = this.tail;

        if (this.length > 1) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.length--;

            return removed.value;
        } else if (this.length === 1) {
            this.tail = null;
            this.head = null;
            this.length--;

            return removed.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtHead() {
        // Return value of head node
        if (this.length > 0) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if (this.length > 0) {
            return this.tail.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
