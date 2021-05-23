//给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
//
// 进阶：
//
//
// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
//
//
//
//
// 示例 1：
//
//
//输入：head = [4,2,1,3]
//输出：[1,2,3,4]
//
//
// 示例 2：
//
//
//输入：head = [-1,5,3,4,0]
//输出：[-1,0,3,4,5]
//
//
// 示例 3：
//
//
//输入：head = []
//输出：[]
//
//
//
//
// 提示：
//
//
// 链表中节点的数目在范围 [0, 5 * 104] 内
// -105 <= Node.val <= 105
//
// Related Topics 排序 链表
// 👍 1136 👎 0


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
 * @return {ListNode}
 */
// [To be completed]
var sortList = function(head) {
    // 链表的归并排序实现
    let count = 0;
    let p = head;
    while (p) {
        p = p.next;
        count++;
    }

    return _mergeSort(head, count);
};

function _mergeSort(node, count) {
    if (!node || !node.val) {
        return node;
    }

    console.log('node:', node);
    // console.log('node.val:', node.val);

    let left = Math.floor(count / 2), right = count - left;

    // console.log('count:', count);
    // console.log('left:', left);
    // console.log('right:', right);

    let lp = node, rp = lp, p;

    for (let i = 1; i < left; i++) {
        rp = rp.next;
    }

    // console.log('rp.val:', rp.val);
    // 当到此行时，rp 指向左半部分的最后一个节点

    // 将左右两半的区间彻底断开
    p = rp;
    p.next = null;
    rp = rp.next;
    // [p, rp, p.next] = [rp, rp.next, null];

    // 将左右两半分别进行归并排序，返回排序后的末尾节点
    lp = _mergeSort(lp, left);
    rp = _mergeSort(rp, right);

    // let result;

    while (lp || rp) {
        if ((!rp) || (lp && lp.val <= rp.val)) {
            p.next = lp;
            lp = lp.next;
            p = p.next;
            // [p.next, lp, p] = [lp, lp.next, p.next];
        } else {
            p.next = rp;
            rp = rp.next;
            p = p.next;
            // [p.next, rp, p] = [rp, rp.next, p.next];
        }
    }

    return p.next;
}

// input: [4,2,1,3]
//leetcode submit region end(Prohibit modification and deletion)
