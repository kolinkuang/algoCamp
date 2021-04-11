//给你一个整数 n ，请你找出并返回第 n 个 丑数 。
//
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。
//
//
//
// 示例 1：
//
//
//输入：n = 10
//输出：12
//解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
//
//
// 示例 2：
//
//
//输入：n = 1
//输出：1
//解释：1 通常被视为丑数。
//
//
//
//
// 提示：
//
//
// 1 <= n <= 1690
//
// Related Topics 堆 数学 动态规划
// 👍 591 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n <= 0 || n === 1) {
        return 1;
    }

    const list = [];

    let cur = 1;
    while (list.length < n) {
        if (isUgly(cur)) {
            list.push(cur);
        }
        cur++;
    }

    return list.pop();
};

function isUgly(n) {
    if (n <= 0) {
        return false;
    }

    const factors = [2, 3, 5];
    for (const factor of factors) {
        while (!(n % factor)) {
            n /= factor;
        }
    }

    return n === 1;
}
//leetcode submit region end(Prohibit modification and deletion)
