// 状态转移表法

function minDistDp(matrix, n) {
    const length = matrix.length;
    const states = new Array(length).fill(0).map(() => new Array(length).fill(0));
    let sum = 0;
    for (let j = 0; j < n; j++) {
        // 初始化 states 的第一行数据
        sum += matrix[0][j];
        states[0][j] = sum;
    }

    sum = 0;
    for (let i = 0; i < n; i++) {
        // 初始化 states 的第一列数据
        sum += matrix[i][0];
        states[i][0] = sum;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            states[i][j] = matrix[i][j] + Math.min(states[i - 1][j], states[i][j - 1]);
        }
    }

    console.log(states);

    return states[n - 1][n - 1];
}

const matrix = [
    [1, 3, 5, 9],
    [2, 1, 3, 4],
    [5, 2, 6, 7],
    [6, 8, 4, 3]
];
console.log(minDistDp(matrix, 4));
