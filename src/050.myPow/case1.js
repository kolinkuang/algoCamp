//实现 pow(x, n) ，即计算 x 的 n 次幂函数。
//
// 示例 1:
//
// 输入: 2.00000, 10
//输出: 1024.00000
//
//
// 示例 2:
//
// 输入: 2.10000, 3
//输出: 9.26100
//
//
// 示例 3:
//
// 输入: 2.00000, -2
//输出: 0.25000
//解释: 2-2 = 1/22 = 1/4 = 0.25
//
// 说明:
//
//
// -100.0 < x < 100.0
// n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。
//
// Related Topics 数学 二分查找


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function (x, n) {
    if (x === 0) {
        return 0;
    }
    let result = 1;
    let i = 0;
    let isNegative = false;
    if (n < 0) {
        n = -n;
        isNegative = true;
    }
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    if (isNegative) {
        result = 1 / result;
    }

    return result;
};

console.log(myPow(2.00000, 10));
console.log('Expect:', 1024.00000);
console.log(myPow(2.10000, 3));
console.log('Expect:', 9.26100);
console.log(myPow(2.00000, -2));
console.log('Expect:', 0.25000);
//leetcode submit region end(Prohibit modification and deletion)
