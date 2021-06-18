//设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。当缓存
//被填满时，它应该删除最近最少使用的项目。
//
// 它应该支持以下操作： 获取数据 get 和 写入数据 put 。
//
// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
//写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新
//的数据值留出空间。
//
// 示例:
//
// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
//
//cache.put(1, 1);
//cache.put(2, 2);
//cache.get(1);       // 返回  1
//cache.put(3, 3);    // 该操作会使得密钥 2 作废
//cache.get(2);       // 返回 -1 (未找到)
//cache.put(4, 4);    // 该操作会使得密钥 1 作废
//cache.get(1);       // 返回 -1 (未找到)
//cache.get(3);       // 返回  3
//cache.get(4);       // 返回  4
//
// Related Topics 设计
// 👍 98 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
class Node {

    constructor(key = 0, value = 0, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }

    removeThis() {
        if (this.prev) {
            this.prev.next = this.next;
        }
        if (this.next) {
            this.next.prev = this.prev;
        }
        this.next = this.prev = null;
    }

    insertPrev(node) {
        node.next = this;
        node.prev = this.prev;
        if (this.prev) {
            this.prev.next = node;
        }
        this.prev = node;
    }

}

class HashList {

    constructor(tail, head) {
        this.head = new Node();
        this.tail = new Node();
        this.data = new Map();
        this.head.next = tail;
        this.tail.prev = head;
    }

    put(key, value) {
        //TODO
        if (this.data.has(key)) {
            this.data.get(key).value = value;
            this.data.get(key).removeThis();
        } else {
            this.data.set(key, new Node(key, value));
        }
    }

    get(key) {
        if (!this.data.has(key)) {
            return -1;
        }
        this.data.get(key).removeThis();
        this.tail.insertPrev(this.data.get(key));
        return this.data.get(key).value;
    }

    removeThis() {
        if (this.prev) {
            this.prev.next = this.next;
        }
        if (this.enxt) {
            this.next.prev = this.prev;
        }
        this.next = this.prev = null;
        return this;
    }

}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.h = new HashList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    return this.h.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.h.put(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
//leetcode submit region end(Prohibit modification and deletion)
