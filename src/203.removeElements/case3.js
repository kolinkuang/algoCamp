//删除链表中等于给定值 val 的所有节点。
//
// 示例:
//
// 输入: 1->2->6->3->4->5->6, val = 6
//输出: 1->2->3->4->5
//
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
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function(head, val) {
    const sentinel = new ListNode(null);
    sentinel.next = head;
    let cur = sentinel;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return sentinel.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 时间复杂度：O(n)
// 空间复杂度：O(1)
// n 为链表长度
//leetcode submit region end(Prohibit modification and deletion)
