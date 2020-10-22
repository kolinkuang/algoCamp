//给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
//
// 你可以对一个单词进行如下三种操作：
//
//
// 插入一个字符
// 删除一个字符
// 替换一个字符
//
//
//
//
// 示例 1：
//
// 输入：word1 = "horse", word2 = "ros"
//输出：3
//解释：
//horse -> rorse (将 'h' 替换为 'r')
//rorse -> rose (删除 'r')
//rose -> ros (删除 'e')
//
//
// 示例 2：
//
// 输入：word1 = "intention", word2 = "execution"
//输出：5
//解释：
//intention -> inention (删除 't')
//inention -> enention (将 'i' 替换为 'e')
//enention -> exention (将 'n' 替换为 'x')
//exention -> exection (将 'n' 替换为 'c')
//exection -> execution (插入 'u')
//
// Related Topics 字符串 动态规划
// 👍 1173 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let minDistance = function (word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // 边界条件
    if (m * n === 0) {
        return m + n;
    }

    // 初始化缓存数组
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp.push(new Array(n + 1));
    }

    // 初始化初始条件
    for (let i = 0; i <= m; i++) {
        dp[0][i] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[j][0] = j;
    }

    // 缓存数组更新
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let value1 = dp[i - 1][j] + 1;
            let value2 = dp[i][j - 1] + 1;
            let value3 = dp[i - 1][j - 1];
            if (word1[i - 1] !== word2[j - 1]) {
                value3++;
            }
            dp[i][j] = Math.min(value1, Math.min(value2, value3));
        }
    }

    return dp[m][n];
};

// ---------------------------------------
const message = 'Input: %s, expect: %s, actual: %s';

function _assert(input, expected, fn) {
    const actual = fn.apply(null, input);
    console.assert(expected === actual, message, input, expected, actual);
}

function assert(input, expected) {
    _assert(input, expected, minDistance);
}

assert(['intention', 'execution'], 5);
//leetcode submit region end(Prohibit modification and deletion)
