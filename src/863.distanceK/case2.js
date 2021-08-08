//给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。
//
// 返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。
//
//
//
//
//
//
// 示例 1：
//
// 输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2
//输出：[7,4,1]
//解释：
//所求结点为与目标结点（值为 5）距离为 2 的结点，
//值分别为 7，4，以及 1
//
//
//
//注意，输入的 "root" 和 "target" 实际上是树上的结点。
//上面的输入仅仅是对这些对象进行了序列化描述。
//
//
//
//
// 提示：
//
//
// 给定的树是非空的。
// 树上的每个结点都具有唯一的值 0 <= node.val <= 500 。
// 目标结点 target 是树上的结点。
// 0 <= K <= 1000.
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树
// 👍 399 👎 0


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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    // DFS 深搜 + 哈希缓存
    // 1.先定位至目标节点 target，并记录所有节点的父节点
    const parents = {};
    findParents(root, target, parents);

    // 2.从 target 节点触发，用 DFS 遍历整棵树
    const result = [];
    findMatched(target, k, parents, target, result);

    return result;
};

function findParents(node, target, parents) {
    if (node.left) {
        parents[node.left.val] = node;
        findParents(node.left, target, parents);
    }

    if (node.right) {
        parents[node.right.val] = node;
        findParents(node.right, target, parents);
    }
}

function findMatched(node, k, parents, from, result) {
    if (!node) {
        return;
    }

    if (k === 0) {
        result.push(node.val);
        return;
    }

    k--;
    if (node.left !== from) {
        findMatched(node.left, k, parents, node, result);
    }
    if (node.right !== from) {
        findMatched(node.right, k, parents, node, result);
    }
    if (parents[node.val] !== from) {
        findMatched(parents[node.val], k, parents, node, result)
    }
}

// 时间复杂度：O(n)（两次深度优先搜索）
// 空间复杂度：O(n)（记录父节点需要空间以及 DFS 所需栈空间皆为 O(n)）
// n 为二叉树节点个数
//leetcode submit region end(Prohibit modification and deletion)
