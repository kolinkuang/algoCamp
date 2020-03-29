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
    let result = 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    for (let i = 0; i < n; i++) {
        result *= x;
        if (Math.abs(result) < 1 / 100_000 || Math.abs(result) > 10_000) {
            break;
        }
    }
    return result;
};

// let a = myPow(2.00000, 10);
// let b = myPow(2.10000, 3).toFixed(5);
// let c = myPow(2.00000, -2);
// let d = myPow(-2.00000, 2);
// let e = myPow(100, 230);
// let f = myPow(-100, -231);

// console.log(a === 1024.00000);
// console.log(b === 9.26100.toFixed(5));
// console.log(c === 0.25000);
// console.log(f);

console.log(myPow(0.00001, 2147483647));
//leetcode submit region end(Prohibit modification and deletion)
