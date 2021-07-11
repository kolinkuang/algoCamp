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
    const n = mat.length, m = mat[0].length;
    let queue = [], vis = [];
    initQueue(queue, vis, n, m, mat);
    while (queue.length) {
        const cur = queue.pop();
        for (let k = 0; k < 4; k++) {
            const x = cur.i + pos[k][0];
            const y = cur.j + pos[k][1];
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
            queue.unshift({
                i: x,
                j: y,
                k: cur.k + 1
            });
        }
    }

    return vis;
};

const pos = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function initQueue(queue, vis, n, m, mat) {
    vis.push(...new Array(n).fill(0).map(() => new Array(m).fill(-1)));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mat[i][j]) {
                continue;
            }
            vis[i][j] = 0; //找到所有0号节点
            queue.push({
                i, // 坐标x
                j, // 坐标y
                k: 0  // 离 0 号元素距离
            });
        }
    }

    // console.log('vis:', vis);
    // console.log('queue:', queue);
}

const mat = [[0,0,0],[0,1,0],[1,1,1]];
console.log(updateMatrix(mat));
// [[0,0,0],[0,1,0],[1,2,1]]
//leetcode submit region end(Prohibit modification and deletion)
