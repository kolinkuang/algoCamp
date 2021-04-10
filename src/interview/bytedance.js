// 实现一个js中的多维数组初始化方法
// function multiArray (initValue, arg1, arg2, arg3...) {
// // your code here
// }
// 满足任意维的 多维数组 的初始化。
// 如
// multiArray(null, 1) // [ null ]
// multiArray('x', 2, 2) // [ [ 'x', 'x' ], [ 'x', 'x' ] ]
// multiArray('o', 3, 3, 3)
/*
[
[ [ 'o', 'o', 'o' ], [ 'o', 'o', 'o' ], [ 'o', 'o', 'o' ] ],
[ [ 'o', 'o', 'o' ], [ 'o', 'o', 'o' ], [ 'o', 'o', 'o' ] ],
[ [ 'o', 'o', 'o' ], [ 'o', 'o', 'o' ], [ 'o', 'o', 'o' ] ]
]
*/


// ==============
// The TestCase is shown below
// Input : 1 2
// Output : 3

function multiArray(initValue, ...args) {
    return buildData(initValue, args);
}

function buildData(initValue, args) {
    const length = args.pop();
    if (typeof length === 'undefined') {
        return initValue;
    }

    const list = new Array(length);
    list.fill(buildData(initValue, args));
    return list;
}

console.log(multiArray(null, 1));
console.log(multiArray('x', 2, 2));
console.log(multiArray('o', 3, 3, 3));
