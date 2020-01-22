const list = [1, 2, 4, 3, 6, 5, 2, 4, 5];
const sum = 7;

function twoSum(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === sum) {
                console.log(list[i], list[j]);
                break;
            }
        }
    }
}

function *count(x=10000) {
    while (x--) {
        yield x;
    }
}

console.time();
for (let n of [...count()]) {
    console.log('========================');
    twoSum(list);
}
console.timeEnd();