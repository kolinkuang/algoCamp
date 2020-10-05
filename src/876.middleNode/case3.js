//给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
//
// 如果有两个中间结点，则返回第二个中间结点。
//
//
//
// 示例 1：
//
// 输入：[1,2,3,4,5]
//输出：此列表中的结点 3 (序列化形式：[3,4,5])
//返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
//注意，我们返回了一个 ListNode 类型的对象 ans，这样：
//ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next =
//NULL.
//
//
// 示例 2：
//
// 输入：[1,2,3,4,5,6]
//输出：此列表中的结点 4 (序列化形式：[4,5,6])
//由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
//
//
//
//
// 提示：
//
//
// 给定链表的结点数介于 1 和 100 之间。
//
// Related Topics 链表
// 👍 263 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
    // 迭代，快慢指针
    // 时间复杂度：O(n)
    // 空间复杂度：O(1)

    let fast, slow;
    fast = slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
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

    return sentinel;
}

const message = 'Input: %s, expect: %s, actual: %s';

function _assert(input, expected, fn) {
    const actualList = _printList(fn.call(null, _generateLinkedList(input)));
    console.assert(JSON.stringify(expected) === JSON.stringify(actualList), message, JSON.stringify(input), expected, actualList);
}

function assert(input, expected) {
    _assert(input, expected, middleNode);
}

assert([1, 2, 3, 4, 5], [3, 4, 5]);
assert([1, 2, 3, 4, 5, 6], [4, 5, 6]);
//leetcode submit region end(Prohibit modification and deletion)
