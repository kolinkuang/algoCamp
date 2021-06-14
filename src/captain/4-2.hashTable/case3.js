class Node {

    constructor(data) {
        this.data = data || '';
        this.next = null;
    }

    insert(node) {
        [node.next, this.next] = [this.next, node];
    }

}

class HashTable {

    // 拉链法
    constructor(n = 100) {
        this.data = [new Node()];
        this.cnt = 0;
    }

    insert(s) {
        let ind = this._hash(s) & this.data.length; // 计算哈希值
        ind = this._recalcInd(ind, s); // 冲突处理
        let p = this.data[ind];
        while (p.next && p.next.data !== s) {
            p = p.next;
        }
        if (!p.next) {
            p.insert(new Node(s));
            this.cnt++;
            if (this.cnt > this.data.length * 3) {
                this._expand();
            }
        }
    }

    find(s) {
        let ind = this._hash(s) & this.data.length; // 计算哈希值
        ind = this._recalcInd(ind, s); // 冲突处理
        let p = this.data[ind].next;
        while (p && p.data !== s) {
            p = p.next;
        }
        return !!p;
    }


    _hash(s) {
        const seed = 131;
        let hash = 0;
        for (let i = 0; s[i]; i++) {
            hash = hash * seed + s[i];
        }
        return hash & 0x7fffffff;
    }

    _recalcInd(ind) {
        return ind;
    }

    _expand() {
        // 扩展的均摊时间复杂度为 O(1)
        const n = this.data.length * 2;
        const h = new HashTable(n);
        for (let i = 0; i < this.data.length; i++) {
            let p = this.data[i].next;
            while (p) {
                h.insert(p.data);
                p = p.next;
            }
        }
        this.h = h;
    }
}

let str = ['captainHu', 'kaikebar'];
let h = new HashTable();
for (let i = 1; i <= 2; i++) {
    // const s = str[0];
    const s = str[i - 1];
    switch (i) {
        case 1:
            h.insert(s);
            break;
        case 2:
            console.log(`Find ${s}: ${h.find(s)}`);
            break;
    }
}
