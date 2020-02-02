/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path) {
    let stack = [];
    let dirs = path.split(/(\/)/)
        .filter(token => !['', '.'].includes(token));

    while (dirs.length) {
        let token = dirs.shift();
        if ((token === '/' && stack[stack.length - 1] !== '/') ||
            token.match(/(\w*)/g).filter(token => token !== '').length > 0) {
            stack.push(token);
        } else if (token === '..') {
            stack.pop();
            stack.pop();
        }
    }

    if (stack.length > 1 && stack[stack.length - 1] === '/') {
        stack.pop();
    }

    return stack.join('');
};

// console.log(simplifyPath('/home/'));
// console.log(simplifyPath('/../'));
// console.log(simplifyPath('/home//foo/'));
// console.log(simplifyPath('/a/./b/../../c/'));
// console.log(simplifyPath('/a/../../b/../c//.//'));
// console.log(simplifyPath('/a//b////c/d//././/..'));

console.log(simplifyPath('/home/') === '/home');
console.log(simplifyPath('/../') === '/');
console.log(simplifyPath('/home//foo/') === '/home/foo');
console.log(simplifyPath('/a/./b/../../c/') === '/c');
console.log(simplifyPath('/a/../../b/../c//.//') === '/c');
console.log(simplifyPath('/a//b////c/d//././/..') === '/a/b/c');