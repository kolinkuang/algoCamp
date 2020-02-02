/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function (path) {
    let stack = [];
    let dirs = path.split('/');

    while (dirs.length) {
        let token = dirs.shift();
        if (token ==='..') {
            stack.pop();
        } else if(token && token !== '.') {
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