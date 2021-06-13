// 莱文斯坦距离
function lwstDP(a, b) {
    const n = a.length, m = b.length;
    const minDist = new Array(n).fill(0).map(() => new Array(m).fill(0));

    // 初始化第0行:a[0..0]与b[0..j]的编辑距离
    for (let j = 0; j < m; j++) {
        if (a[0] === b[j]) {
            minDist[0][j] = j;
        } else if (j > 0) {
            minDist[0][j] = minDist[0][j - 1] + 1;
        } else {
            minDist[0][j] = 1;
        }
    }

    // 初始化第0列:a[0..i]与b[0..0]的编辑距离
    for (let i = 0; i < n; i++) {
        if (a[i] === b[0]) {
            minDist[i][0] = i;
        } else if (i > 0) {
            minDist[i][0] = minDist[i - 1][0] + 1;
        } else {
            minDist[i][0] = 1;
        }
    }

    // 按行填表
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (a[i] === b[j]) {
                minDist[i][j] = Math.min(Math.min(minDist[i - 1][j] + 1, minDist[i][j - 1] + 1), minDist[i - 1][j - 1]);
            } else {
                minDist[i][j] = Math.min(Math.min(minDist[i - 1][j] + 1, minDist[i][j - 1] + 1), minDist[i - 1][j - 1] + 1);
            }
        }
    }

    return minDist[n - 1][m - 1];
}

const a = 'mitcmu', b = 'mtacnu';
console.log(lwstDP(a, b));
