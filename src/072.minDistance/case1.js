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
    const n = word1.length;
    const m = word2.length;

    // 有一个字符串为空
    if (n * m === 0) {
        return n + m;
    }

    // DP 数组
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(m + 1));
    }

    // 边界状态初始化
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    // 计算所有 DP 值
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let left = dp[i - 1][j] + 1;
            let down = dp[i][j - 1] + 1;
            let leftDown = dp[i - 1][j - 1];
            if (word1[i - 1] !== word2[j - 1]) {
                leftDown += 1;
            }
            dp[i][j] = Math.min(left, Math.min(down, leftDown));
        }
    }

    return dp[n][m];
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
