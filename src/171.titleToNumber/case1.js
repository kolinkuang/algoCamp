//给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。
//
//
//
// 例如，
//
//
//    A -> 1
//    B -> 2
//    C -> 3
//    ...
//    Z -> 26
//    AA -> 27
//    AB -> 28
//    ...
//
//
//
//
// 示例 1:
//
//
//输入: columnTitle = "A"
//输出: 1
//
//
// 示例 2:
//
//
//输入: columnTitle = "AB"
//输出: 28
//
//
// 示例 3:
//
//
//输入: columnTitle = "ZY"
//输出: 701
//
// 示例 4:
//
//
//输入: columnTitle = "FXSHRXW"
//输出: 2147483647
//
//
//
//
// 提示：
//
//
// 1 <= columnTitle.length <= 7
// columnTitle 仅由大写英文组成
// columnTitle 在范围 ["A", "FXSHRXW"] 内
//
// Related Topics 数学 字符串
// 👍 280 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} columnTitle
 * @return {number}
 */
// TODO
var titleToNumber = function(columnTitle) {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let result = 0;
    let j = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        result += j++ * 26 + letters.indexOf(columnTitle[i]) + 1;
    }

    return result;
};

console.log(titleToNumber('A'));    //1
console.log(titleToNumber('AB'));   //28
//leetcode submit region end(Prohibit modification and deletion)
