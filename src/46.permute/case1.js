//给定一个没有重复数字的序列，返回其所有可能的全排列。
//
// 示例:
//
// 输入: [1,2,3]
//输出:
//[
//  [1,2,3],
//  [1,3,2],
//  [2,1,3],
//  [2,3,1],
//  [3,1,2],
//  [3,2,1]
//]
// Related Topics 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function (nums) {
    let result = [];
    backTrack(result, [], nums);
    return result;
};

function backTrack(result, stack, nums) {
    if (stack.length === nums.length) {
        return result.push([...stack]);
    }
    for (let num of nums) {
        if (stack.includes(num)) {
            continue;
        }
        stack.push(num);
        backTrack(result, stack, nums);
        stack.pop();
    }
}

console.log(permute([1, 2, 3]));
//leetcode submit region end(Prohibit modification and deletion)
