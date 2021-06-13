// 状态转移方程
function minDistDp(matrix, n) {
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const result = maxLcs(matrix, dp, n - 1, n - 1);
    console.log(dp);
    return result;
}

function maxLcs(matrix, dp, i, j) {
    if (i === 0 || j === 0) {
        return matrix[0][0];
    }

    if (dp[i][j] > 0) {
        return dp[i][j];
    }

    const minLeft = j >= 1 ? maxLcs(matrix, dp, i, j - 1) : -1;
    const minUp = i >= 1 ? maxLcs(matrix, dp, i - 1, j) : -1;

    dp[i][j] = matrix[i][j] + Math.min(minLeft, minUp);

    return dp[i][j];
}

const matrix = [
    [1, 3, 5, 9],
    [2, 1, 3, 4],
    [5, 2, 6, 7],
    [6, 8, 4, 3]
];
console.log(minDistDp(matrix, 4));
