//给定一个链表，判断链表中是否有环。
//
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
//
//
//
// 示例 1：
//
// 输入：head = [3,2,0,-4], pos = 1
//输出：true
//解释：链表中有一个环，其尾部连接到第二个节点。
//
//
//
//
// 示例 2：
//
// 输入：head = [1,2], pos = 0
//输出：true
//解释：链表中有一个环，其尾部连接到第一个节点。
//
//
//
//
// 示例 3：
//
// 输入：head = [1], pos = -1
//输出：false
//解释：链表中没有环。
//
//
//
//
//
//
// 进阶：
//
// 你能用 O(1)（即，常量）内存解决此问题吗？
// Related Topics 链表 双指针


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
 * @return {boolean}
 */
let hasCycle = function (head) {
    if (!head) {
        return false;
    }

    let nodeToIndex = {};
    let current = head;
    while (current) {
        if (nodeToIndex[current] !== -1) {
            return true;
        } else {
            nodeToIndex[current] = 1;
        }
        current = current.next;
    }
    return false;
};

//head = [3,2,0,-4], pos = 1
//head = [1,2], pos = 0
//head = [1], pos = -1

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(hasCycle(head));
// console.log(hasCycle(head));
// console.log(hasCycle(head));

// function printList(head) {
//     let current = head;
//     let result = [];
//     while (current) {
//         result.push(current.val);
//         current = current.next;
//     }
//     let finalResult = result.join(',');
//     console.log(finalResult);
//     return finalResult;
// }
//
// function generateRawList(num = 5) {
//     let nodeList = {};
//     for (let i = num; i > 0; i--) {
//         let node = new ListNode(i);
//         nodeList[i] = node;
//         if (i < num) {
//             node.next = nodeList[i + 1];
//         }
//     }
//     return nodeList[1];
// }
//
// let head = generateRawList();
// let newHead = reverseList(head);
// printList(newHead);
//leetcode submit region end(Prohibit modification and deletion)
