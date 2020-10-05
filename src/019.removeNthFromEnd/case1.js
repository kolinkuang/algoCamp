//给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
//
// 示例：
//
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
//
//当删除了倒数第二个节点后，链表变为 1->2->3->5.
//
//
// 说明：
//
// 给定的 n 保证是有效的。
//
// 进阶：
//
// 你能尝试使用一趟扫描实现吗？
// Related Topics 链表 双指针
// 👍 1011 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    // 迭代，快慢指针
    // 时间复杂度：（设共有 L 个节点）O(L)
    // 空间复杂度：O(1)

    let fast, slow;
    let sentinel = new ListNode(null, head);
    fast = slow = sentinel;

    // 1.将快慢指针分开距离
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // 2.快慢指针同时向前迭代，直到快指针去到链表尾
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // 3.此时慢指针所在位置就在应删除节点的前一节点；改变该节点指向
    slow.next = slow.next.next;

    return sentinel.next;
};

//-------------------------------------------
function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

function _printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

function _generateLinkedList(list) {
    let sentinel = new ListNode();
    let current = sentinel;

    for (let i = 0; i < list.length; i++) {
        let node = new ListNode();
        node.val = list[i];
        current = current.next = node;
    }

    return sentinel.next;
}

const message = 'Input: %s, expect: %s, actual: %s';

function assert(input, expected) {
    const actualList = _printList(removeNthFromEnd(_generateLinkedList(input.list), input.n));
    console.assert(JSON.stringify(expected) === JSON.stringify(actualList), message, JSON.stringify(input), expected, actualList);
}

assert({list: [1, 2, 3, 4, 5], n: 2}, [1, 2, 3, 5]);
assert({list: [1], n: 1}, []);
assert({list: [1, 2], n: 2}, [2]);
//leetcode submit region end(Prohibit modification and deletion)
