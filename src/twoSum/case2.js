const list = [1, 2, 4, 3, 6, 5, 2, 4, 5];
const sum = 7;

function twoSum(list) {
    let cache = [];
    for (let num of list) {
        let index = cache.indexOf(sum - num);
        if (index !== -1) {
            console.log(cache[index], num);
        } else {
            cache.push(sum - num);
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