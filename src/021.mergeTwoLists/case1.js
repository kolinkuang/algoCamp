//将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
//
//
// 示例：
//
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
//
// Related Topics 链表
// 👍 1294 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 迭代
    // 时间复杂度：O(n+m)
    // 空间复杂度：O(1)

    const sentinel = new ListNode();
    let prev = sentinel;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            [prev.next, prev, l1] = [l1, l1, l1.next];
        } else {
            [prev.next, prev, l2] = [l2, l2, l2.next];
        }
    }

    // 最后肯定还有一个节点未绑定；绑定上
    prev.next = l1 || l2;

    return sentinel.next;

};
//leetcode submit region end(Prohibit modification and deletion)
