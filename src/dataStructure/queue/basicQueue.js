class Queue {

    constructor() {
        this._items = [];
    }

    enqueue(element) {
        this._items.push(element);
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

    print() {
        console.log(this._items.toString());
    }

}

export default Queue;
