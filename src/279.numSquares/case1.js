//给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
//
// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
//
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
//
//
//
//
// 示例 1：
//
//
//输入：n = 12
//输出：3
//解释：12 = 4 + 4 + 4
//
// 示例 2：
//
//
//输入：n = 13
//输出：2
//解释：13 = 4 + 9
//
//
// 提示：
//
//
// 1 <= n <= 104
//
// Related Topics 广度优先搜索 数学 动态规划
// 👍 904 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    // 完全背包问题的最值问题
    // dp[i]:和为i的完全平方数的最小数量
    const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    // i: 完全平方数之和
    // j: 可以选取的用于计算平方和的自然数
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            if (j * j <= i) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
    }

    return dp[n];
};

// 时间复杂度：O(n * sqrt(n))
// 空间复杂度：O(n)
//leetcode submit region end(Prohibit modification and deletion)
