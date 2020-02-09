//给定一个二叉树，找出其最大深度。
//
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例：
//给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//   / \
//  9  20
//    /  \
//   15   7
//
// 返回它的最大深度 3 。
// Related Topics 树 深度优先搜索


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
 * @return {number}
 */
let maxDepth = function (root) {
    let maxDepth = 0;

    if (!root) {
        return maxDepth;
    }

    root.depth = 1;
    let stack = [root];

    while (stack.length) {
        let current = stack.pop();
        if (current) {
            maxDepth = Math.max(current.depth, maxDepth);
            if (current.right) {
                current.right.depth = current.depth + 1;
                stack.push(current.right);
            }
            if (current.left) {
                current.left.depth = current.depth + 1;
                stack.push(current.left);
            }
        }
    }

    return maxDepth;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
//leetcode submit region end(Prohibit modification and deletion)
