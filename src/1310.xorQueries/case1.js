//有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。
//
// 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为
//本次查询的结果。
//
// 并返回一个包含给定查询 queries 所有结果的数组。
//
//
//
// 示例 1：
//
// 输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
//输出：[2,7,14,8]
//解释：
//数组中元素的二进制表示形式是：
//1 = 0001
//3 = 0011
//4 = 0100
//8 = 1000
//查询的 XOR 值为：
//[0,1] = 1 xor 3 = 2
//[1,2] = 3 xor 4 = 7
//[0,3] = 1 xor 3 xor 4 xor 8 = 14
//[3,3] = 8
//
//
// 示例 2：
//
// 输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
//输出：[8,0,4,4]
//
//
//
//
// 提示：
//
//
// 1 <= arr.length <= 3 * 10^4
// 1 <= arr[i] <= 10^9
// 1 <= queries.length <= 3 * 10^4
// queries[i].length == 2
// 0 <= queries[i][0] <= queries[i][1] < arr.length
//
// Related Topics 位运算
// 👍 52 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    const n = queries.length;
    const result = new Array(queries.length).fill(0);
    for (let i = 0; i < n; i++) {
        let [left, right] = queries[i];
        let sum = 0;
        while (left <= right) {
            sum ^= arr[left++];
        }
        result[i] = sum;
    }

    return result;
};

const arr = [1, 3, 4, 8];
const queries = [[0, 1], [1, 2], [0, 3], [3, 3]];
const expected = [2, 7, 14, 8];
console.log(xorQueries(arr, queries));

// 时间复杂度：O(n), n = queries.length;
// 空间复杂度：O(1)
//leetcode submit region end(Prohibit modification and deletion)
