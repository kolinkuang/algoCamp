class CircleQueue {

    // 用链表实现循环队列

    constructor(k) {
        this.data = [];
        this.size = k;
        this.head = -1;
        this.tail = -1;
    }

    enqueue(value) {
        if (this.isFull()) {
            return false;
        }

        if (this.isEmpty()) {
            this.head = 0;
        }

        this.tail = (this.tail + 1) % this.size;
        this.data[this.tail] = value;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) {
            return false;
        }

        if (this.tail === this.head) {
            this.tail = this.head = -1;
        } else {
            this.head = (this.head + 1) % this.size;
        }

        return true;
    }

    front() {
        return this.head === -1 ? -1 : this.data[this.head];
    }

    rear() {
        return this.tail === -1 ? -1 : this.data[this.tail];
    }

    isEmpty() {
        return this.head === -1 && this.tail === -1;
    }

    isFull() {
        return this.head === (this.tail + 1) % this.size;
    }

    static createNew(k) {
        return new CircleQueue(k);
    }

}

export default CircleQueue;
