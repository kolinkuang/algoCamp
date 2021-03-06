class HashTable {

    constructor(n = 100) {
        this.data = new Array(n);
        this.flag = new Array(n); // 每个位置是否存贮数据
        this.cnt = 0;
    }

    insert(s) {
        let ind = this._hash(s) & this.data.length; // 计算哈希值
        this._recalcInd(ind, s); // 冲突处理
        if (!this.flag[ind]) {
            this.data[ind] = s;
            this.flag[ind] = true;
            this.cnt++;
            if (this.cnt * 100 > this.data.length * 75) {
                this._expand();
            }
        }
        this.data[ind] = s;
        this.flag[ind] = true;
    }

    find(s) {
        let ind = this._hash(s) & this.data.length; // 计算哈希值
        ind = this._recalcInd(ind, s); // 冲突处理
        return this.flag[ind];
    }

    _hash(s) {
        const seed = 131;
        let hash = 0;
        for (let i = 0; s[i]; i++) {
            hash = hash * seed + s[i];
        }
        return hash & 0x7fffffff;
    }

    _recalcInd(ind, s) {
        // 开放定址法
        let t = 1;
        while (this.flag[ind] && this.data[ind] !== s) {
            ind += t * t;
            t++;
            ind %= this.data.length;
        }
        return ind;
    }

    _expand() {
        // 扩展的均摊时间复杂度为 O(1)
        const n = this.data.length * 2;
        const h = new HashTable(n);
        for (let i = 0; i < this.data.length; i++) {
            if (this.flag[i]) {
                continue;
            }
            h.insert(this.data[i]);
        }
        this.h = h;
    }
}

// let op = 1;
let str = ['captainHu', 'kaikebar'];
let h = new HashTable();
for (let i = 1; i <= 2; i++) {
    const s = str[0];
    switch (i) {
        case 1:
            h.insert(s);
            break;
        case 2:
            console.log(`Find ${s}: ${h.find(s)}`);
            break;
    }
}
