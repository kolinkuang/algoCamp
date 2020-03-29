//给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
//
// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（
//一个节点也可以是它自己的祖先）。”
//
// 例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]
//
//
//
//
//
// 示例 1:
//
// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
//输出: 3
//解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
//
//
// 示例 2:
//
// 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
//输出: 5
//解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
//
//
//
//
// 说明:
//
//
// 所有节点的值都是唯一的。
// p、q 为不同节点且均存在于给定的二叉树中。
//
// Related Topics 树


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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return null;
    }

    let current = root;
    let stack = [current];
    let parentMap = {root: null};
    let ancestors = new Set();
    let foundP = false;
    let foundQ = false;

    while (stack.length) {
        if (current === p) {
            foundP = true;
        }
        if (current === q) {
            foundQ = true;
        }
        if (foundP && foundQ) {
            break;
        }

        while (current) {
            if (current.left) {
                parentMap[current.left] = current;
            }
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        if (current.right) {
            parentMap[current.right] = current;
        }
        current = current.right;
    }

    while (p) {
        ancestors.add(p);
        p = parentMap[p];
    }

    let ancestorList = Array.from(ancestors);
    while (!ancestorList.some(node => node.val === q.val)) {
        q = parentMap[q];
    }

    return q;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTreeNode(val) {
    return new TreeNode(val);
}

// const TREE_NODE = [
//     'left',
//     'right'
// ];

function buildBinaryTree(treeValues) {
    let treeNodeList = [];
    for (let value of treeValues) {
        treeNodeList.push(buildTreeNode(value));
    }

    let root = treeNodeList.shift();
    let current = root;

    while (treeNodeList.length) {
        _bindTreeNode(current, treeNodeList);

        // current.left = treeNodeList.shift();
        // current.right = treeNodeList.shift();
        // current = current.left;
        // current.left = treeNodeList.shift();
        // current.right = treeNodeList.shift();
    }

    return root;
}

function _bindTreeNode(treeNode, treeNodeList) {
    treeNode.left = treeNodeList.shift();
    treeNode.right = treeNodeList.shift();
}

let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
let actualResult = lowestCommonAncestor(buildBinaryTree(root), buildTreeNode(5), buildTreeNode(1)).val;
console.log('actualResult =', actualResult, ',expectedResult =', 3);

let actualResult2 = lowestCommonAncestor(buildBinaryTree(root), buildTreeNode(5), buildTreeNode(4)).val;
console.log('actualResult =', actualResult2, ',expectedResult =', 5);
//leetcode submit region end(Prohibit modification and deletion)
