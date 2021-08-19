//编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
//
//
//
// 示例 1：
//
// 输入："hello"
//输出："holle"
//
//
// 示例 2：
//
// 输入："leetcode"
//输出："leotcede"
//
//
//
// 提示：
//
//
// 元音字母不包含字母 "y" 。
//
// Related Topics 双指针 字符串
// 👍 176 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // 碰撞指针
    const vowels = 'aeiouAEIOU';
    let pos = 0, neg = s.length - 1;
    const list = s.split('');
    while (pos < neg) {
        if (vowels.includes(list[pos]) && vowels.includes(list[neg])) {
            [list[pos], list[neg]] = [list[neg], list[pos]];
            pos++;
            neg--;
        } else if (vowels.includes(list[pos])) {
            neg--;
        } else if (vowels.includes(list[neg])) {
            pos++;
        } else {
            pos++;
            neg--;
        }
    }

    return list.join('');
}

// 时间复杂度：O(n)
// 空间复杂度：O(1)

const s = 'a.';
console.log(reverseVowels(s)); // 'a.'
//leetcode submit region end(Prohibit modification and deletion)
