//n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
//
//
//
// 上图为 8 皇后问题的一种解法。
//
// 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
//
// 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
//
// 示例:
//
// 输入: 4
//输出: [
// ['.Q..',  // 解法 1
//  '...Q',
//  'Q...',
//  '..Q.'],
//
// ['..Q.',  // 解法 2
//  'Q...',
//  '...Q',
//  '.Q..']
//]
//解释: 4 皇后问题存在两个不同的解法。
//
// Related Topics 回溯算法


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
    //行不能相同
    //列不能相同
    //行+列不能相同
    //行-列不能相同

    //1.如何开始找
    //2.如何找下一个
    //3.如何终止查找，输出结果

    // [2,0,3,1]

    //1.如何开始找
    let result = [];
    //查找第0行
    find(0);
    return result;

    //为了记录之前的路径
    function find(row, tmp = []) {
        if (row === n) {
            //找完了 n-1就已经是最后一行，tmp就是所有的摆放位置
            result.push(tmp.map(c => {
                let arr = new Array(n).fill('.');
                arr[c] = 'Q';
                return arr.join('');
            }));
        }

        //1.如何查找
        for (let col = 0; col < n; col++) {
            //是不是不能放
            let cantSet = tmp.some((ci, ri) => {
                //ci, ri是之前摆放棋子的行列索引
                //col, row是当前所在位置的索引
                return ci === col ||
                    (ci + ri) === (col + row) ||
                    (ci - ri) === (col - row);
            });

            if (cantSet) {
                continue;
            }

            //如果能放，直接下一行
            find(row + 1, [...tmp, col]);
        }
    }
};

const expectedOutput = [
    ['.Q..',  // 解法 1
        '...Q',
        'Q...',
        '..Q.'],
    ['..Q.',  // 解法 2
        'Q...',
        '...Q',
        '.Q..']
]

console.log(JSON.stringify(solveNQueens(4)));
console.log(JSON.stringify(expectedOutput));
console.log(JSON.stringify(solveNQueens(4)) === JSON.stringify(expectedOutput));
//leetcode submit region end(Prohibit modification and deletion)
