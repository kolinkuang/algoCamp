// 最长公共子串长度
function lcs(a, b) {
    const n = a.length, m = b.length;
    const maxLcs = new Array(n).fill(0).map(() => new Array(m).fill(0));

    // 初始化第0行:a[0..0]与b[0..j]的编辑距离
    for (let j = 0; j < m; j++) {
        if (a[0] === b[j]) {
            maxLcs[0][j] = 1;
        } else if (j > 0) {
            maxLcs[0][j] = maxLcs[0][j - 1];
        } else {
            maxLcs[0][j] = 0;
        }
    }

    // 初始化第0列:a[0..i]与b[0..0]的编辑距离
    for (let i = 0; i < n; i++) {
        if (a[i] === b[0]) {
            maxLcs[i][0] = 1;
        } else if (i > 0) {
            maxLcs[i][0] = maxLcs[i - 1][0];
        } else {
            maxLcs[i][0] = 0;
        }
    }

    // 按行填表
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (a[i] === b[j]) {
                maxLcs[i][j] = Math.max(Math.max(maxLcs[i - 1][j], maxLcs[i][j - 1]), maxLcs[i - 1][j - 1] + 1);
            } else {
                maxLcs[i][j] = Math.max(Math.max(maxLcs[i - 1][j], maxLcs[i][j - 1]), maxLcs[i - 1][j - 1]);
            }
        }
    }

    return maxLcs[n - 1][m - 1];
}

const a = 'mitcmu', b = 'mtacnu';
console.log(lcs(a, b));
