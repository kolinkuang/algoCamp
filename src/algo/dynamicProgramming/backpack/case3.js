function knapsack(weights, prices, n, w) {
    // weights:物品重量列表，prices: 物品价格列表, n:物品个数，w:背包可承载重量
    // 0/1 背包最值问题
    const dp = new Array(n).fill(0).map(() => new Array(w + 1).fill(0));

    // 初始化
    dp[0][0] = 0;
    for (let i = 0; i < n; i++) {
        dp[0][weights[0]] = prices[0];
    }

    // console.log(dp);

    // console.log('=====================');

    // i: 将要决策第几个物品是否装入背包
    // j: 当前背包中物品的总重量
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < w; j++) {
            if (weights[i] <= j) {
                // 可放
                // console.log(`i=${i}, j=${j}`);
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - weights[i]] + prices[i]);
            } else {
                // 不可放
                // console.log(`i=${i}, j=${j}`);
                dp[i][j] = dp[i-1][j];
            }
        }
    }

    console.log(dp);

    return dp[n - 1][w];
}

const weights = [2, 2, 4, 6, 3];
const prices = [10, 66, 90, 87, 44];
const n = 5;
const w = 9;
console.log(knapsack(weights, prices, n, w));
