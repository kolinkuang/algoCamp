class PriorityQueue {

    constructor() {
        this._items = [];
    }

    enqueue(element, priority) {
        const queueElement = new QueueElement(...arguments);

        let added = false;
        for (let i = 0; i < this._items.length; i++) {
            if (queueElement.priority < this._items[i].priority) {
                this._items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this._items.push(queueElement);
        }
    }

    print() {
        for (let i = 0; i < this._items.length; i++) {
            console.log(`${this._items[i].element} - ${this._items[i].priority}`);
        }
    }

    dequeue() {
        return this._items.shift();
    }

    head() {
        return this._items[0];
    }

    isEmpty() {
        return !this._items.length;
    }

    size() {
        return this._items.length;
    }

}

class QueueElement {

    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }

}

export default PriorityQueue;
