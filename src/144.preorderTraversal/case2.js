//给定一个二叉树，返回它的 前序 遍历。
//
// 示例:
//
// 输入: [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
//
//输出: [1,2,3]
//
//
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
// Related Topics 栈 树


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let preorderTraversal = function (root) {
    let result = [];
    let stack = [];
    let current = root;
    while (current || stack.length) {
        while (current) {
            result.push(current.val);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop().right;
    }
    return result;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
//leetcode submit region end(Prohibit modification and deletion)
