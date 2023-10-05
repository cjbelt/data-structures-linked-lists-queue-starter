// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.length;
        }

        newNode.next = this.head;
        this.head = newNode;

        return this.length;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
         // O(n)
        //  let length = 0;
        //  let curr = this.head;

        //  while (curr) {
        //     curr = curr.next;
        //     length++;
        //  }

        //  return length;

         // O(1)
         return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;

        while(curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes()/this.listLength();

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        if (n < this.listLength()) {
            let count = 0;
            let curr = this.head;

            while(count < n) {
                curr = curr.next;
                count++;
            }

            return curr;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            let mid = Math.ceil(this.listLength() / 2) - 1; // O(1)
            return this.findNthNode(mid); // O(n)

            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let curr = this.head;
        const newList = new SinglyLinkedList();

        while (curr) {
            newList.addToHead(curr.value); // O(1)
            curr = curr.next;
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let curr = this.head;
        let prev = null;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        let headTrail = this.head;
        let tailTrail = this.tail;

        while(headTrail !== tailTrail && headTrail.prev !== tailTrail) {
            headTrail = headTrail.next;
            tailTrail = tailTrail.prev;
        }

        return tailTrail;
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            // The time complexity doesn't change at all, thanks to the helper methods in the single list, but the doubly list method didn't need of helper methods
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();
        newList.head = this.tail;
        let curr = newList.head;
        let original = this.tail;

        while(original) {
            curr.next = original.prev;
            curr.prev = original.next;
            curr = curr.next;
            original = original.prev;
        }

        newList.tail = this.head;

        return newList;
        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        const nextTail = this.tail.next;
        this.tail.next = this.tail.prev;
        this.tail.prev = nextTail;
        let curr = this.tail.next;

        const nextHead = this.head.next;
        this.head.next = this.head.prev;
        this.head.prev = nextHead;

        [this.head, this.tail] = [this.tail, this.head];

        while(curr.next) {
            const next = curr.prev;
            curr.prev = curr.next;
            curr.next = next;
            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
