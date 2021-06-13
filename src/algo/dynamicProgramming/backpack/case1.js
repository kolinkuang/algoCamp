function knapsack(weight, n, w) {
    // weight:物品重量，n:物品个数，w:背包可承载重量
    const dp = new Array(n).fill(0).map(() => new Array(w + 1).fill(false));

    dp[0][0] = true;
    if (weight[0] <= w) {
        dp[0][weight[0]] = true;
    }

    // console.log(dp);

    // i: 将要决策第几个物品是否装入背包
    // j: 当前背包中物品的总重量
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= w; j++) {
            if (dp[i-1][j]) {
                dp[i][j] = true;
            }
            // if (weight[i] > w) {
            //     // 不放第 i 个
            //     dp[i][j] = dp[i - 1][j];
            // } else {
            //     // 放第 i 个
            //     dp[i][j] = dp[i - 1][j - weight[i]];
            // }
        }
        for (let j = 0; j <= w - weight[i]; j++) {
            if (dp[i-1][j]) {
                dp[i][j+weight[i]] = true;
            }
        }
    }

    // console.log(dp);

    // 输出结果
    let max = w;
    while (max >= 0 && !dp[n - 1][max]) {
        max--;
    }

    return max;
}

const weight = [2, 2, 4, 6, 3];
const n = 5;
const w = 9;
console.log(knapsack(weight, n, w));
