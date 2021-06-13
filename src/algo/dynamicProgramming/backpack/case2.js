function knapsack(items, n, w) {
    // items:物品重量列表，n:物品个数，w:背包可承载重量
    const dp = new Array(w + 1).fill(false);

    dp[0] = true;

    if (items[0] <= w) {
        dp[items[0]] = true;
    }

    for (let i = 1; i < n; i++) {
        for (let j = w - items[i]; j >= 0; j--) {
            if (dp[j]) {
                dp[j + items[i]] = true;
            }
            console.log(dp);
        }
    }

    let cur = w;
    while (cur >= 0 && !dp[cur]) {
        cur--;
    }

    return cur;
}

const weight = [2, 2, 4, 6, 3];
const n = 5;
const w = 9;
console.log(knapsack(weight, n, w));

// 时间复杂度：O(n * w)
// 空间复杂度：O(w)
