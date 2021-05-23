//给你一个由非负整数组成的数组 nums 。另有一个查询数组 queries ，其中 queries[i] = [xi, mi] 。
//
// 第 i 个查询的答案是 xi 和任何 nums 数组中不超过 mi 的元素按位异或（XOR）得到的最大值。换句话说，答案是 max(nums[j] XOR
// xi) ，其中所有 j 均满足 nums[j] <= mi 。如果 nums 中的所有元素都大于 mi，最终答案就是 -1 。
//
// 返回一个整数数组 answer 作为查询的答案，其中 answer.length == queries.length 且 answer[i] 是第 i 个
//查询的答案。
//
//
//
// 示例 1：
//
// 输入：nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]
//输出：[3,3,7]
//解释：
//1) 0 和 1 是仅有的两个不超过 1 的整数。0 XOR 3 = 3 而 1 XOR 3 = 2 。二者中的更大值是 3 。
//2) 1 XOR 2 = 3.
//3) 5 XOR 2 = 7.
//
//
// 示例 2：
//
// 输入：nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]
//输出：[15,-1,5]
//
//
//
//
// 提示：
//
//
// 1 <= nums.length, queries.length <= 105
// queries[i].length == 2
// 0 <= nums[j], xi, mi <= 109
//
// Related Topics 位运算 字典树
// 👍 40 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function (nums, queries) {
    const trie = new Trie();
    for (const val of nums) {
        trie.insert(val);
    }

    const numQ = queries.length;
    const result = new Array(numQ);
    for (let i = 0; i < numQ; i++) {
        const [val, limit] = queries[i];
        result[i] = trie.getMaxXorWithLimit(val, limit);
    }
    return result;
};

const L = 30;

class Trie {

    constructor() {
        this.children = new Array(2);
        this.min = Number.MAX_VALUE;
    }

    insert(val) {
        let node = this;
        node.min = Math.min(node.min, val);
        for (let i = L - 1; i >= 0; i--) {
            const bit = (val >> i) & 1;
            node.children[bit] = node.children[bit] || new Trie();
            node = node.children[bit];
            node.min = Math.min(node.min, val);
        }
    }

    getMaxXorWithLimit(val, limit) {
        let node = this;
        if (node.min > limit) {
            return -1;
        }
        let result = 0;
        for (let i = L - 1; i >= 0; i--) {
            let bit = (val >> i) & 1;
            if (node.children[bit ^ 1] &&
                node.children[bit ^ 1].min <= limit
            ) {
                result |= 1 << i;
                bit ^= 1;
            }
            node = node.children[bit];
        }
        return result;
    }

}

let nums = [5, 2, 4, 6, 6, 3], queries = [[12, 4], [8, 1], [6, 3]];
console.log(maximizeXor(nums, queries));
// [15,-1,5]

nums = [5, 8, 0, 3, 2, 10, 9, 2, 4, 5], queries = [[3, 8]];
console.log(maximizeXor(nums, queries));
// [11]
//leetcode submit region end(Prohibit modification and deletion)
