/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path) {
    const strategy = {
        '': stack => stack,
        '.': stack => stack,
        '..': stack => stack.pop()
    };
    let stack = [];
    let dirs = path.split('/');

    while (dirs.length) {
        let token = dirs.shift();
        if (strategy[token]) {
            strategy[token](stack);
        } else {
            stack.push(token);
        }
    }

    return `/${stack.join('/')}`;
};

console.log(simplifyPath('/home/') === '/home');
console.log(simplifyPath('/../') === '/');
console.log(simplifyPath('/home//foo/') === '/home/foo');
console.log(simplifyPath('/a/./b/../../c/') === '/c');
console.log(simplifyPath('/a/../../b/../c//.//') === '/c');
console.log(simplifyPath('/a//b////c/d//././/..') === '/a/b/c');