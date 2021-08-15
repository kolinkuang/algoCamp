//给你一个大小为 m x n 的网格和一个球。球的起始坐标为 [startRow, startColumn] 。你可以将球移到在四个方向上相邻的单元格内（可以
//穿过网格边界到达网格之外）。你 最多 可以移动 maxMove 次球。
//
// 给你五个整数 m、n、maxMove、startRow 以及 startColumn ，找出并返回可以将球移出边界的路径数量。因为答案可能非常大，返回对
//109 + 7 取余 后的结果。
//
//
//
// 示例 1：
//
//
//输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
//输出：6
//
//
// 示例 2：
//
//
//输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
//输出：12
//
//
//
//
// 提示：
//
//
// 1 <= m, n <= 50
// 0 <= maxMove <= 50
// 0 <= startRow < m
// 0 <= startColumn < n
//
// Related Topics 动态规划
// 👍 160 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    // 动态规划
    //定义 dp[i][j][k] 表示球移动 i 次之后位于坐标 (j,k) 的路径数量
    const dp = new Array(maxMove + 1).fill().map(() => new Array(m).fill().map(() => new Array(n).fill(0)));
    dp[0][startRow][startColumn] = 1;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const MOD = 10e8 + 7;

    let totalPaths = 0;

    for (let i = 0; i < maxMove; i++) {
        for (let j = 0; j < m; j++) {
            for (let k = 0; k < n; k++) {
                const count = dp[i][j][k];
                for (const [rowDelta, colDelta] of directions) {
                    const j1 = j + rowDelta;
                    const k1 = k + colDelta;
                    if (j1 >= 0 && j1 < m && k1 >= 0 && k1 < n) {
                        dp[i + 1][j1][k1] = (dp[i + 1][j1][k1] + count) % MOD;
                    } else {
                        totalPaths = (totalPaths + count) % MOD;
                    }
                }

            }
        }
    }

    return totalPaths;
};

// 时间复杂度：O(maxMove * m * n)
// 空间复杂度：O(maxMove * m * n)

console.log(findPaths(2, 2, 2, 0, 0)); //6
//leetcode submit region end(Prohibit modification and deletion)
