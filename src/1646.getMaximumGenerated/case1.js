/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    const cache = new Map();
    cache.set(0, 0);
    cache.set(1, 1);

    getNum(n, cache);

    return Math.max(...cache.values());
};

// TODO: 递归会有漏洞，只能用遍历
function getNum(k, cache) {
    if (cache.has(k)) {
        return cache.get(k);
    }

    let value = 0;
    if (!(k % 2)) {
        // 偶数
        value = getNum(k / 2, cache);
    } else {
        // 奇数
        const i = (k - 1) / 2;
        value = getNum(i, cache) + getNum(i + 1, cache);
    }

    cache.set(k, value);
    console.log(cache);
    return value;
}

// 时间复杂度：O(n)
// 空间复杂度：O(n) (栈递归空间，以及缓存空间)

console.log(getMaximumGenerated(4));    // 2
