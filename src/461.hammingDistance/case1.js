//两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
//
// 给出两个整数 x 和 y，计算它们之间的汉明距离。
//
// 注意：
//0 ≤ x, y < 231.
//
// 示例:
//
//
//输入: x = 1, y = 4
//
//输出: 2
//
//解释:
//1   (0 0 0 1)
//4   (0 1 0 0)
//       ↑   ↑
//
//上面的箭头指出了对应二进制位不同的位置。
//
// Related Topics 位运算
// 👍 471 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let newX = x.toString(2);
    let newY = y.toString(2);

    const m = newX.length;
    const n = newY.length;

    // 补0
    if (m > n) {
        newY = new Array(m - n).fill(0).join('') + newY;
    } else if (m < n) {
        newX = new Array(n - m).fill(0).join('') + newX;
    }

    let result = 0;
    for (let i = 0, j = 0; i < newX.length; i++, j++) {
        result += newX[i] ^ newY[j];
    }

    return result;
};

console.log(hammingDistance(1, 4));
// 时间复杂度：O(n)
// 空间复杂度：O(m + n)
// m, n 分别为 x, y 转换为二进制后的数字长度
//leetcode submit region end(Prohibit modification and deletion)
