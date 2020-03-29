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
    //二分法
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    let currentVal = x;

    for (let i = n; i > 0; i = i >>> 1) {
        if (i & 1) {
            // 按位与，i为奇数
            result = result * currentVal;
        }
        currentVal *= currentVal;
    }

    return result;
};

// console.log(myPow(2.00000, 10) === 1024.00000);
// console.log(myPow(2.10000, 3).toFixed(5) === 9.26100.toFixed(5));
// console.log(myPow(2.00000, -2) === 0.25000);
console.log(myPow(2.00000, -2147483648));
//leetcode submit region end(Prohibit modification and deletion)