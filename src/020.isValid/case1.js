/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    const matchItems = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let stack = [];
    let chars = s.split('');

    while (chars.length) {
        let char = chars.shift();
        if (char in matchItems) {
            // left side paraphrase
            stack.push(char);
        } else {
            // right side paraphrase21
            if (matchItems[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return !stack.length;
};

console.log(!isValid('('));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(!isValid('(]'));
console.log(!isValid('([)]'));
console.log(isValid('{[]}'));