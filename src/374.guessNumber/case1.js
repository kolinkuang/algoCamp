//我们正在玩一个猜数字游戏。 游戏规则如下：
//我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。
//每次你猜错了，我会告诉你这个数字是大了还是小了。
//你调用一个预先定义好的接口 guess(int num)，它会返回 3 个可能的结果（-1，1 或 0）：
//
// -1 : 我的数字比较小
// 1 : 我的数字比较大
// 0 : 恭喜！你猜对了！
//
//
// 示例 :
//
// 输入: n = 10, pick = 6
//输出: 6
// Related Topics 二分查找


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return                -1 if num is lower than the guess number
 *                         1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let mid = left + (right - left) / 2;
        let flag = guess(mid);
        if (flag === -1) {
            right = mid;
        } else if (flag === 1) {
            left = mid;
        } else {
            return mid;
        }
    }
};

function guess() {}
//leetcode submit region end(Prohibit modification and deletion)
