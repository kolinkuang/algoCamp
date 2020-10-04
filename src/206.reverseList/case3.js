//反转一个单链表。
//
// 示例:
//
// 输入: 1->2->3->4->5->NULL
//输出: 5->4->3->2->1->NULL
//
// 进阶:
//你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
// Related Topics 链表


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
let reverseList = function(head) {
    // 递归
    return _reverse(null, head);
};

function _reverse(previous, current) {
    if (!current) {
        // reach the end of the list
        return previous;
    }

    // let next = current.next;
    // current.next = previous;
    let next;
    [next, current.next] = [current.next, previous];

    return _reverse(current, next);
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    let finalResult = result.join(',');
    console.log(finalResult);
}

function generateRawList(num = 5) {
    if (typeof num !== 'number') {
        throw new TypeError('Not a number');
    }
    let nodeList = [];
    for (let i = num; i > 0; i--) {
        let node = new ListNode(i);
        nodeList[i] = node;
        if (i < num) {
            node.next = nodeList[i + 1];
        }
    }
    return nodeList[1];
}

let head = generateRawList();
let newHead = reverseList(head);
printList(newHead);
//leetcode submit region end(Prohibit modification and deletion)
