function leftpad(str, length, ch) {
    let len = length - str.length + 1;//需要补齐ch的长度
    return Array(len).join(ch) + str;
}

// console.time('leftpad');
// for (let i=0; i<10000; i++) {
//     leftpad('hello', 100000, '0');
// }
// console.timeEnd('leftpad');

//**************************************//

function leftpad2(str, length, ch) {
    let len = length - str.length;
    let total = '';
    while (len) {
        if (len % 2 === 1) {
            total += ch;
        }
        if (len === 1) {
            return total + str;
        }
        ch += ch; // 0 00 0000
        len = parseInt(len / 2);
    }
}
console.time('leftpad2');
// for (let i=0; i<100000; i++) {
//     leftpad2('hello', 100000, '0');
// }
console.timeEnd('leftpad2');

//**************************************//

function leftpad3(str, length, ch) {
    let len = length - str.length;
    let total = '';
    while (len) {
        if (len & 1) {     // 按位与
            total += ch;
        }
        if (len === 1) {
            return total + str;
        }
        ch += ch; // 0 00 0000 00000000
        len = len >> 1;    // 有符号右移
    }
}
console.time('leftpad3');
for (let i=0; i<100000; i++) {
    leftpad3('hello', 100000, '0');
}
console.timeEnd('leftpad3');