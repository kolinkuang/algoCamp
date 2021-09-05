//写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
//
//
//F(0) = 0,   F(1) = 1
//F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
//
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
//
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
//
//
//
// 示例 1：
//
//
//输入：n = 2
//输出：1
//
//
// 示例 2：
//
//
//输入：n = 5
//输出：5
//
//
//
//
// 提示：
//
//
// 0 <= n <= 100
//
// Related Topics 记忆化搜索 数学 动态规划 👍 226 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const map = new Map([[0, 0], [1, 1]]);
    return _fib(n, map);
};

function _fib(n, map) {
    if (map.has(n)) {
        return map.get(n);
    }

    const result = (_fib(n - 1, map) + _fib(n - 2, map)) % MOD;
    map.set(n, result);
    console.log(n, result);
    return result;
}

const MOD = 1e9+7;
//leetcode submit region end(Prohibit modification and deletion)
