//给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
//
// 示例 1:
//
// 输入: [10,2]
//输出: 210
//
// 示例 2:
//
// 输入: [3,30,34,5,9]
//输出: 9534330
//
// 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
// Related Topics 排序
// 👍 316 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {string}
 */
let largestNumber = function (nums) {

    let list = [];

    for (let num of nums) {
        list.push(num + '');
    }

    list.sort((a, b) => {
        return ('' + b + a) - ('' + a + b);
    });

    if (list[0] === '0') {
        return '0';
    }

    return list.join('');
};
//leetcode submit region end(Prohibit modification and deletion)

const message = 'Input: %s, expect: %s, actual: %s';

function assert(nums, expected) {
    let actual = largestNumber(JSON.parse(JSON.stringify(nums)));
    console.assert(actual === expected, message, JSON.stringify(nums), expected, actual);

}

assert([10, 2], '210');