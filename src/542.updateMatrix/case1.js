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
const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
//TODO
var updateMatrix = function(mat) {
    // 广搜
    let n = mat.length;
    let m = mat[0].length;
    let q = [];
    let vis = [];
    initQueue(q, vis, n, m, mat);

    while (q.length) {
        const cur = q.pop();
        for (let k = 0; k < 4; k++) {
            let x = cur.i + dir[k][0];
            let y = cur.j + dir[k][1];
            if (x < 0 || x >= n) {
                continue;
            }
            if (y < 0 || y >= m) {
                continue;
            }
            if (vis[x][y] !== -1) {
                continue;
            }
            vis[x][y] = cur.k + 1;
            q.push(new Data(x, y, cur.k + 1));
        }
    }
};

function initQueue(q, vis, n, m, mat) {
    for (let i = 0; i < n; i++) {
        vis.push([]);
        for (let j = 0; j < m; j++) {
            vis[0].push(-1);
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j]) {
                continue;
            }
            vis[i][j] = 0;
            q.push(new Data(i, j, 0));
        }
    }
}

class Data {

    constructor(i = 0, j = 0, k = 0) {
        this.i = i;
        this.j = j;
        this.k = k;
    }

}

const input = [[0,0,0],[0,1,0],[0,0,0]];
console.log(updateMatrix(input));
//leetcode submit region end(Prohibit modification and deletion)
