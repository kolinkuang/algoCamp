//给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
//
// 注意：本题与 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bs
//t/ 相同
//
//
//
//
//
// 示例 1：
//
//
//输入：root = [4,2,6,1,3]
//输出：1
//
//
// 示例 2：
//
//
//输入：root = [1,0,48,null,null,12,49]
//输出：1
//
//
//
//
// 提示：
//
//
// 树中节点数目在范围 [2, 100] 内
// 0 <= Node.val <= 105
// 差值是一个正数，其数值等于两值之差的绝对值
//
//
//
// Related Topics 树 深度优先搜索 递归
// 👍 187 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let diff = Number.MAX_SAFE_INTEGER;
    inorder(root);
    return diff;

    function inorder(node) {
        if (!node) {
            return;
        }

        if (!node.left) {
            return;
        }

        if (!node.right) {
            return;
        }

        inorder(node.left);

        diff = Math.min(diff, node.val - node.left.val);
        diff = Math.min(diff, node.right.val - node.val);

        inorder(node.right);
    }
};
//leetcode submit region end(Prohibit modification and deletion)
