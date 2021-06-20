//TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时
//，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
//
// 要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可
//以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
// Related Topics 哈希表 数学
// 👍 119 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
const h = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let s;
    do {
        s = randString(5);
    } while (h.has(s))
    h.set(s, longUrl);
    return s;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return h.get(shortUrl);
};

function randString(n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += ch(Math.random());
    }
    return s;
}

function ch(x) {
    // num ==> str
    // 0-25: 'a' - 'z'
    // 26-51: 'A' - 'Z'
    // 52-61: '0' - '9'
    x *= 62;
    if (x < 26) {
        return Math.floor(x + 'a'.charCodeAt(0));
    }
    if (x < 52) {
        return Math.floor(x - 26 + 'A'.charCodeAt(0));
    }
    return Math.floor(x - 52 + '0'.charCodeAt(0));
}

const url = 'https://leetcode.com/problems/design-tinyurl';
console.log(decode(encode(url)));

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
//leetcode submit region end(Prohibit modification and deletion)
