//给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
//
// 两个相邻元素间的距离为 1 。
//
//
//
// 示例 1：
//
//
//输入：
//[[0,0,0],
// [0,1,0],
// [0,0,0]]
//
//输出：
//[[0,0,0],
// [0,1,0],
// [0,0,0]]
//
//
// 示例 2：
//
//
//输入：
//[[0,0,0],
// [0,1,0],
// [1,1,1]]
//
//输出：
//[[0,0,0],
// [0,1,0],
// [1,2,1]]
//
//
//
//
// 提示：
//
//
// 给定矩阵的元素个数不超过 10000。
// 给定矩阵中至少有一个元素是 0。
// 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
//
// Related Topics 广度优先搜索 数组 动态规划 矩阵
// 👍 444 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    // 广搜
    const m = mat.length, n = mat[0].length;
    const dist = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const check = new Array(m).fill(0).map(() => new Array(n).fill(false));
    const queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
                check[i][j] = true;
            }
        }
    }

    while (queue.length) {
        const [i, j] = queue.shift();
        for (let d = 0; d < 4; d++) {
            let ni = i + pos[d][0];
            let nj = j + pos[d][1];
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && !check[ni][nj]) {
                dist[ni][nj] = dist[i][j] + 1;
                queue.push([ni, nj]);
                check[ni][nj] = true;
            }
        }
    }

    return dist;
};
//leetcode submit region end(Prohibit modification and deletion)
