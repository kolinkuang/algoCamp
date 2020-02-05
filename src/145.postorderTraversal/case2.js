//给定一个二叉树，返回它的 后序 遍历。
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
//输出: [3,2,1]
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
let postorderTraversal = function (root) {
    let result = [];
    let stack = [];
    let stack2 = [];
    let current;

    stack.push(root);
    while (stack.length) {
        current = stack.pop();
        if (current) {
            stack2.push(current.val);
            stack.push(current.left);
            stack.push(current.right);
        }
    }

    while (stack2.length) {
        result.push(stack2.pop());
    }

    return result;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//leetcode submit region end(Prohibit modification and deletion)
