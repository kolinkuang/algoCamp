//给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回
// -1。
//
// 你可以认为每种硬币的数量是无限的。
//
//
//
// 示例 1：
//
// 输入：coins = [1, 2, 5], amount = 11
//输出：3
//解释：11 = 5 + 5 + 1
//
// 示例 2：
//
// 输入：coins = [2], amount = 3
//输出：-1
//
// 示例 3：
//
// 输入：coins = [1], amount = 0
//输出：0
//
//
// 示例 4：
//
// 输入：coins = [1], amount = 1
//输出：1
//
//
// 示例 5：
//
// 输入：coins = [1], amount = 2
//输出：2
//
//
//
//
// 提示：
//
//
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 231 - 1
//
// Related Topics 动态规划
// 👍 851 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let coinChange = function (coins, amount) {
    // 时间复杂度：O(S * n)
    // 空间复杂度：O(S)
    // S: 总金额；n: 面额数

    let dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[dp.length - 1] > amount ? -1 : dp.pop();
};

//--------------------------------
const message = 'Input: %s, expect: %s, actual: %s';

function _assert(input, expected, fn) {
    const actual = fn.call(null, input.coins, input.amount);
    console.assert(expected === actual, message, JSON.stringify(input), expected, actual);
}

function assert(input, expected) {
    _assert(input, expected, coinChange);
}

assert({coins: [1, 2, 5], amount: 11}, 3);
assert({coins: [2], amount: 3}, -1);
assert({coins: [1], amount: 0}, 0);
assert({coins: [1], amount: 1}, 1);
assert({coins: [1], amount: 2}, 2);
assert({coins: [2, 5, 10, 1], amount: 27}, 4);
//leetcode submit region end(Prohibit modification and deletion)
