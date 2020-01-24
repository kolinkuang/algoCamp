class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedNodeList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(element) {
        let node = new Node(element);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.length++;
    }

    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.element);
            current = current.next;
        }
        console.log(result.join('===>'));
        return result.join('===>');
    }

    removeAt(index) {
        let current = this.head;
        let previous;
        let i = 0;
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bound: ' + index);
        }
        if (index === 0) {
            // remove the first one
            this.head = current.next;
        }
        while (i < index) {
            // find out the dedicated element by looping
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = current.next;
        current.next = null;
        this.length--;

        // return the removed element
        return current.element;
    }

}

let list = new LinkedNodeList();
list.append('hello');
list.append('new');
list.append('world');
list.append('hahahah');
list.print();
list.removeAt(1);
list.print();

module.exports = {Node, LinkedNodeList};