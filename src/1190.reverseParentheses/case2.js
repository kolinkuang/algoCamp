//给出一个字符串 s（仅含有小写英文字母和括号）。
//
// 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
//
// 注意，您的结果中 不应 包含任何括号。
//
//
//
// 示例 1：
//
// 输入：s = "(abcd)"
//输出："dcba"
//
//
// 示例 2：
//
// 输入：s = "(u(love)i)"
//输出："iloveu"
//
//
// 示例 3：
//
// 输入：s = "(ed(et(oc))el)"
//输出："leetcode"
//
//
// 示例 4：
//
// 输入：s = "a(bcdefghijkl(mno)p)q"
//输出："apmnolkjihgfedcbq"
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 2000
// s 中只有小写英文字母和括号
// 我们确保所有括号都是成对出现的
//
// Related Topics 栈
// 👍 87 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    console.log('input:', s);

    const n = s.length;
    const pair = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            const j = stack.pop();
            pair[i] = j;
            pair[j] = i;
        }
    }

    console.log('pair:', pair);

    const sb = [];

    let index = 0, step = 1;
    while (index < n) {
        if (s[index] === '(' || s[index] === ')') {
            index = pair[index];
            step = -step;
        } else {
            sb.push(s[index]);
        }
        index += step;
    }

    return sb.join('');
};

const inputList = [
    '(abcd)',
    // '(u(love)i)',
    // '(ed(et(oc))el)',
    // 'a(bcdefghijkl(mno)p)q'
];
inputList.forEach(input => console.log(reverseParentheses(input)));
//leetcode submit region end(Prohibit modification and deletion)
