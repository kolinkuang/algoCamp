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
    const vowels = ['a','e','i','o','u'];
    let pos = 0, neg = s.length - 1;
    const fromLeft = [], fromRight = [];
    while (pos < neg) {
        if (vowels.includes(s[pos])) {
            fromLeft.push(s[pos]);
        }
        if (vowels.includes(s[neg])) {
            fromRight.push(s[neg]);
        }
        pos++;
        neg--;
    }

    pos = 0;
    neg = s.length - 1;
    const array = s.split('');
    while (pos < neg) {
        if (vowels.includes(array[pos])) {
            array[pos] = fromRight.shift();
        }
        if (vowels.includes(array[neg])) {
            array[neg] = fromLeft.shift();
        }
        pos++;
        neg--;
    }

    return array.join('');
};

// 时间复杂度：O(n)
// 空间复杂度：O(n)

const s = 'a.';
console.log(reverseVowels(s)); // 'a.'
//leetcode submit region end(Prohibit modification and deletion)
