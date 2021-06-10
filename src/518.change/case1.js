//给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。
//
//
//
//
//
//
// 示例 1:
//
// 输入: amount = 5, coins = [1, 2, 5]
//输出: 4
//解释: 有四种方式可以凑成总金额:
//5=5
//5=2+2+1
//5=2+1+1+1
//5=1+1+1+1+1
//
//
// 示例 2:
//
// 输入: amount = 3, coins = [2]
//输出: 0
//解释: 只用面额2的硬币不能凑成总金额3。
//
//
// 示例 3:
//
// 输入: amount = 10, coins = [10]
//输出: 1
//
//
//
//
// 注意:
//
// 你可以假设：
//
//
// 0 <= amount (总金额) <= 5000
// 1 <= coin (硬币面额) <= 5000
// 硬币种类不超过 500 种
// 结果符合 32 位符号整数
//
// 👍 424 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // 完全背包组合问题+动态规划
    const n = coins.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(amount + 1).fill(0));

    dp[0][0] = 1;
    // i: coins.length
    // j: amount
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= amount; j++) {
            const coin = coins[i];
            if (coin > amount) {
                continue;
            }
            dp[i][j] = dp[i-1][j] + dp[i-1][j - coin];
        }
    }

    return dp[n][amount];
};
//leetcode submit region end(Prohibit modification and deletion)
