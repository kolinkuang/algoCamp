//给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。
//
//
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
//
//
//
//
// 示例 1：
//
//
//输入：s = "abcdefg", k = 2
//输出："bacdfeg"
//
//
// 示例 2：
//
//
//输入：s = "abcd", k = 2
//输出："bacd"
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 104
// s 仅由小写英文组成
// 1 <= k <= 104
//
// Related Topics 双指针 字符串
// 👍 145 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // 双指针，模拟
    const list = s.split('');
    const len = s.length;

    for (let i = 0; i < len; i += k * 2) {
        const left = i;
        const right = Math.min(i + k, len) - 1;
        reverse(list, left, right);
    }

    return list.join('');
};

function reverse(list, left, right) {
    while (left < right) {
        [list[left], list[right]] = [list[right], list[left]];
        left++;
        right--;
    }
}

const s = 'abcdef';
const k = 3;
console.log(reverseStr(s, k));  // cbadef
//leetcode submit region end(Prohibit modification and deletion)
