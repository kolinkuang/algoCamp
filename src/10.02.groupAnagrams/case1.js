//编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。
//
// 注意：本题相对原题稍作修改
//
// 示例:
//
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
//输出:
//[
//  ["ate","eat","tea"],
//  ["nat","tan"],
//  ["bat"]
//]
//
// 说明：
//
//
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
//
// Related Topics 哈希表 字符串 排序
// 👍 39 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (const str of strs) {
        const newStr = str.slice().split('').sort().join('');
        const array = map.get(newStr) || [];
        array.push(str);
        map.set(newStr, array);
    }
    return [...map.values()];
};

// 时间复杂度：O(n*m*log(m))
// 空间复杂度：O(n*m)
// n = strs.length
// m: 单个字符串长度
//leetcode submit region end(Prohibit modification and deletion)
