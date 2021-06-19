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
var maxLength = function (arr) {
    // 迭代 + 位运算
    let ans = 0;
    const masks = [0];
    for (const s of arr) {
        let mask = 0;
        for (let i = 0; i < s.length; i++) {
            const ch = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (((mask >> ch) & 1) !== 0) {
                // 若 mask 已有 ch, 则说明 s 含有重复字母，无法构成可行解
                mask = 0;
                break;
            }
            // 将 ch 加入 mask 中
            mask |= (1 << ch);
        }

        if (mask === 0) {
            continue;
        }

        const n = masks.length;
        for (let i = 0; i < n; i++) {
            const m = masks[i];
            if ((m & mask) === 0) {
                // m 和 mask 无公共元素
                masks.push(m | mask);
                ans = Math.max(ans, (m | mask).toString(2).split('0').join('').length);
            }
        }
    }

    console.log('==============================');
    for (const num of masks) {
        console.log(num.toString(2));
    }
    console.log('==============================');

    return ans;
};

// 时间复杂度：O(∣Σ∣+ 2^n)
// 空间复杂度：O(2^n)
// n = arr.length
// ∣Σ∣ 是 arr 中所有字符串的长度之和
const arr = ['un','iq','ue'];
console.log(maxLength(arr));
//leetcode submit region end(Prohibit modification and deletion)
