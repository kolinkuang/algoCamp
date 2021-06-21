//输入一个字符串，打印出该字符串中字符的所有排列。
//
//
//
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
//
//
//
// 示例:
//
// 输入：s = "abc"
//输出：["abc","acb","bac","bca","cab","cba"]
//
//
//
//
// 限制：
//
// 1 <= s 的长度 <= 8
// Related Topics 回溯算法
// 👍 294 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const result = [];

    const arr = Array.from(s).sort();

    do {
        result.push(arr.join(''));
    } while (nextPermutation(arr))

    return result;
};

function nextPermutation(arr) {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i < 0) {
        return false;
    }

    let j = arr.length - 1;
    while (j >= 0 && arr[i] >= arr[j]) {
        j--;
    }

    swap(arr, i, j);
    reverse(arr, i+1);

    return true;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function reverse(arr, start) {
    // 由尾向头找全排列
    let left = start, right = arr.length - 1;
    while (left < right) {
        swap(arr, left, right);
        left++;
        right--;
    }
}

console.log(permutation('abc'));
// ['abc','acb','bac','bca','cab','cba']
//leetcode submit region end(Prohibit modification and deletion)
