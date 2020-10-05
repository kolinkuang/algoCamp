//给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
//
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
//
//
//
// 例如，给定三角形：
//
// [
//     [2],
//    [3,4],
//   [6,5,7],
//  [4,1,8,3]
//]
//
//
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
//
//
//
// 说明：
//
// 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
// Related Topics 数组 动态规划
// 👍 610 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
    // 时间复杂度：O(n^2)
    // 空间复杂度：O(n^2)

    let lastRowIdx = triangle.length - 1;
    let temp = triangle[lastRowIdx]; //初始值
    for (let i = lastRowIdx - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            temp[j] = triangle[i][j] + Math.min(temp[j], temp[j + 1]);
        }
    }
    return temp[0];
};

const input1 = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
];

const message = 'Input: %s, expect: %s, actual: %s';

function _assert(input, expected, fn) {
    const actual = fn.call(null, input);
    console.assert(expected === actual, message, JSON.stringify(input), expected, actual);
}

function assert(input, expected) {
    _assert(input, expected, minimumTotal);
}

assert(input1, 11);
//leetcode submit region end(Prohibit modification and deletion)
