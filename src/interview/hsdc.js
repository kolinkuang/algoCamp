// 字符串重新排列，做到字母和数字交错
// input: helloworld2021198600
// output: h2e0l2l1o1w9o8r6l0d0

function sort(str) {
    const letters = [];
    const numbers = [];
    const result = [];

    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            letters.push(str[i]);
        } else {
            numbers.push(str[i]);
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result[i] = letters[i / 2];
        } else {
            result[i] = numbers[Math.floor(i / 2)];
        }
    }

    return result.join('');
}

const input = 'helloworld2021198600';
const output = 'h2e0l2l1o1w9o8r6l0d0';

console.log(sort(input) === output); // output
