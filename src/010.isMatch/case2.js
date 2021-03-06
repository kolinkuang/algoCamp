//给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
//
// '.' 匹配任意单个字符
//'*' 匹配零个或多个前面的那一个元素
//
//
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
//
// 说明:
//
//
// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
//
//
// 示例 1:
//
// 输入:
//s = "aa"
//p = "a"
//输出: false
//解释: "a" 无法匹配 "aa" 整个字符串。
//
//
// 示例 2:
//
// 输入:
//s = "aa"
//p = "a*"
//输出: true
//解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
//
//
// 示例 3:
//
// 输入:
//s = "ab"
//p = ".*"
//输出: true
//解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
//
//
// 示例 4:
//
// 输入:
//s = "aab"
//p = "c*a*b"
//输出: true
//解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
//
//
// 示例 5:
//
// 输入:
//s = "mississippi"
//p = "mis*is*p*."
//输出: false
// Related Topics 字符串 动态规划 回溯算法
// 👍 1591 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {

// s和p倒着看，dp[i][j]dp[i][j]的取值分为以下几种情况：
//
// 1.p[j - 1] 为普通字符, 若 s[i - 1] == p[j - 1]，则 dp[i][j] = dp[i - 1][j - 1]，否则匹配失败
// 2.p[j - 1] 为'.'，则 dp[i][j] = dp[i - 1][j - 1]
// 3.p[j - 1] 为'*'：
// (1) 不看，则 dp[i][j] = dp[i][j - 2]
// (2) 看，则 dp[i][j] = dp[i - 1][j]

    const m = s.length;
    const n = p.length;

    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp.push(new Array(n + 1).fill(false));
    }
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] !== '*') {
                // 总没有可能以 * 开头的 p 吧。。。
                if (matches(s, p, i, j)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            } else {
                dp[i][j] = dp[i][j] || dp[i][j - 2]; //不看
                if (matches(s, p, i, j - 1)) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; //看
                }
            }
        }
    }

    return dp[m][n];
};

function matches(s, p, i, j) {
    if (i === 0) {
        return false;
    }
    if (p[j - 1] === '.') {
        return true;
    }
    return s[i - 1] === p[j - 1];
}

// ---------------------------------------
const message = 'Input: %s, %s, expect: %s, actual: %s';

function _assert([s, p], expected, fn) {
    const actual = fn.call(null, s, p);
    console.assert(expected === actual, message, s, p, expected, actual);
}

function assert(input, expected) {
    _assert(input, expected, isMatch);
}

assert(['aa', 'a'], false);
assert(['aa', 'a*'], true);
assert(['ab', '.*'], true);
assert(['aab', 'c*a*b'], true);
assert(['mississippi', 'mis*is*p*.'], false);
//leetcode submit region end(Prohibit modification and deletion)