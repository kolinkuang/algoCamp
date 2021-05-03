//给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
//
// 如果反转后整数超过 32 位的有符号整数的范围 [−231, 231 − 1] ，就返回 0。
//假设环境不允许存储 64 位整数（有符号或无符号）。
//
//
//
// 示例 1：
//
//
//输入：x = 123
//输出：321
//
//
// 示例 2：
//
//
//输入：x = -123
//输出：-321
//
//
// 示例 3：
//
//
//输入：x = 120
//输出：21
//
//
// 示例 4：
//
//
//输入：x = 0
//输出：0
//
//
//
//
// 提示：
//
//
// -231 <= x <= 231 - 1
//
// Related Topics 数学
// 👍 2752 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = '';
    let raw = '' + x;

    if (raw[0] === '-') {
        result = '-';
        raw = raw.substr(1);
    }

    result += raw.split('').reverse().join('');
    result = +result;

    return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1 ? result : 0;
};
//leetcode submit region end(Prohibit modification and deletion)
