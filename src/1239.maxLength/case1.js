//给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。
//
// 请返回所有可行解 s 中最长长度。
//
//
//
// 示例 1：
//
// 输入：arr = ["un","iq","ue"]
//输出：4
//解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。
//
//
// 示例 2：
//
// 输入：arr = ["cha","r","act","ers"]
//输出：6
//解释：可能的解答有 "chaers" 和 "acters"。
//
//
// 示例 3：
//
// 输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
//输出：26
//
//
//
//
// 提示：
//
//
// 1 <= arr.length <= 16
// 1 <= arr[i].length <= 26
// arr[i] 中只含有小写英文字母
//
// Related Topics 位运算 回溯算法
// 👍 101 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    // 前缀和 + 动态规划
    const length = arr.length;
    const preCount = new Array(length).fill('');
    preCount[0] = arr[0];
    for (let i = 1; i < length; i++) {
        preCount[i] += preCount[i-1] + arr[i];
    }

    let max = 0;
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            max = Math.max(max, preCount[j].substring(preCount[i]).length);
        }
    }

    return max;
};
//leetcode submit region end(Prohibit modification and deletion)
