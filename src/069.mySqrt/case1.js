//实现 int sqrt(int x) 函数。
//
// 计算并返回 x 的平方根，其中 x 是非负整数。
//
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
//
// 示例 1:
//
// 输入: 4
//输出: 2
//
//
// 示例 2:
//
// 输入: 8
//输出: 2
//说明: 8 的平方根是 2.82842...,
//     由于返回类型是整数，小数部分将被舍去。
//
// Related Topics 数学 二分查找


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
    if (x < 2) {
        return x;
    }

    let num;
    let pivot;
    let left = 2;
    let right = x >>> 1;
    while (left <= right) {
        pivot = left + (right - left) / 2;
        num = pivot * pivot;
        if (num > x) {
            right = pivot - 1;
        } else if (num < x) {
            left = pivot + 1;
        } else {
            return pivot;
        }
    }

    return Math.floor(right);
};

function assert(input, expected) {
    let actual = mySqrt(input);
    console.assert(actual === expected, message, input, expected, actual);
}

const message = 'Input: %s, expect: %s, actual: %s';

assert(7, 2);
assert(8, 2);
assert(4, 2);
assert(1, 1);
assert(0, 0);
assert(5, 2);
assert(2147395599, 46339);
assert(36, 6);
//leetcode submit region end(Prohibit modification and deletion)