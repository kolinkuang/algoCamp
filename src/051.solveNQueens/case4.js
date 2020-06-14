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

    // 1.how to find the first
    // 2.how to find the next
    // 3.how to terminate the execution

    let result = [];

    // 1.how to find the first
    find(n, 0);

    function find(n, row, cache = []) {
        if (row === n) {
            // 3.how to terminate the execution
            result.push(printResult(cache));
        }

        for (let col = 0; col < n; col++) {
            if (match(row, col, cache)) {
                // console.log([...cache, col]);
                find(n, row + 1, [...cache, col]);
            }
        }
    }

    function match(row, col, cache) {
        return cache.every((prevCol, prevRow) => {
            return col !== prevCol &&
                row + col !== prevRow + prevCol &&
                row - col !== prevRow - prevCol;
        });
    }

    function printResult(cache) {
        return cache.map((col) => {
            let data = new Array(n);
            data.fill('.');
            data[col] = 'Q';
            return data.join('');
        })
    }

    return result;
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

let actualResult = JSON.stringify(solveNQueens(8));
console.log(actualResult);
// console.log(actualResult === JSON.stringify(expectedOutput));
//leetcode submit region end(Prohibit modification and deletion)
