//有效数字（按顺序）可以分成以下几个部分：
//
//
// 一个 小数 或者 整数
// （可选）一个 'e' 或 'E' ，后面跟着一个 整数
//
//
// 小数（按顺序）可以分成以下几个部分：
//
//
// （可选）一个符号字符（'+' 或 '-'）
// 下述格式之一：
//
// 至少一位数字，后面跟着一个点 '.'
// 至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
// 一个点 '.' ，后面跟着至少一位数字
//
//
//
//
// 整数（按顺序）可以分成以下几个部分：
//
//
// （可选）一个符号字符（'+' 或 '-'）
// 至少一位数字
//
//
// 部分有效数字列举如下：
//
//
// ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1",
// "53.5e93", "-123.456e789"]
//
//
// 部分无效数字列举如下：
//
//
// ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]
//
//
// 给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true 。
//
//
//
// 示例 1：
//
//
//输入：s = "0"
//输出：true
//
//
// 示例 2：
//
//
//输入：s = "e"
//输出：false
//
//
// 示例 3：
//
//
//输入：s = "."
//输出：false
//
//
// 示例 4：
//
//
//输入：s = ".1"
//输出：true
//
//
//
//
// 提示：
//
//
// 1 <= s.length <= 20
// s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，或者点 '.' 。
//
// Related Topics 数学 字符串
// 👍 193 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // 状态机

    const State = {
        STATE_INITIAL: 0b000000000000001,
        STATE_INT_SIGN: 0b000000000000010,
        STATE_INTEGER: 0b000000000000100,
        STATE_POINT: 0b000000000001000,
        STATE_POINT_WITHOUT_INT: 0b000000000010000,
        STATE_FRACTION: 0b000000000100000,
        STATE_EXP: 0b000000001000000,
        STATE_EXP_SIGN: 0b000000010000000,
        STATE_EXP_NUMBER: 0b000000100000000,
        STATE_END: 0b000001000000000
    };

    const CharType = {
        CHAR_NUMBER: 0b000010000000000,
        CHAR_EXP: 0b000100000000000,
        CHAR_POINT: 0b001000000000000,
        CHAR_SIGN: 0b010000000000000,
        CHAR_ILLEGAL: 0b100000000000000
    };

    function toCharType(ch) {
        if (!isNaN(ch)) {
            return CharType.CHAR_NUMBER;
        } else {
            switch (ch) {
                case 'e':
                case 'E':
                    return CharType.CHAR_EXP;
                case '.':
                    return CharType.CHAR_POINT;
                case '+':
                case '-':
                    return CharType.CHAR_SIGN;
                default:
                    return CharType.CHAR_ILLEGAL;
            }
        }
    }

    const transfer = new Map();

    // 初始状态
    const initialMap = new Map();
    initialMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER);
    initialMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT);
    initialMap.set(CharType.CHAR_SIGN, State.STATE_INT_SIGN);
    transfer.set(State.STATE_INITIAL, initialMap);

    // 符号位
    const intSignMap = new Map();
    intSignMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER);
    intSignMap.set(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT);
    transfer.set(State.STATE_INT_SIGN, intSignMap);

    // 整数部分
    const integerMap = new Map();
    integerMap.set(CharType.CHAR_NUMBER, State.STATE_INTEGER);
    integerMap.set(CharType.CHAR_EXP, State.STATE_EXP);
    integerMap.set(CharType.CHAR_POINT, State.STATE_POINT);
    transfer.set(State.STATE_INTEGER, integerMap);

    // 小数点（左有整数）
    const pointMap = new Map()
    pointMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION);
    pointMap.set(CharType.CHAR_EXP, State.STATE_EXP);
    transfer.set(State.STATE_POINT, pointMap);

    // 小数点（左无整数）
    const pointWithoutIntMap = new Map();
    pointWithoutIntMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION);
    transfer.set(State.STATE_POINT_WITHOUT_INT, pointWithoutIntMap);

    // 小数部分
    const fractionMap = new Map();
    fractionMap.set(CharType.CHAR_NUMBER, State.STATE_FRACTION);
    fractionMap.set(CharType.CHAR_EXP, State.STATE_EXP);
    transfer.set(State.STATE_FRACTION, fractionMap);

    // 字符 e
    const expMap = new Map();
    expMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
    expMap.set(CharType.CHAR_SIGN, State.STATE_EXP_SIGN);
    transfer.set(State.STATE_EXP, expMap);

    // 指数符号
    const expSignMap = new Map();
    expSignMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
    transfer.set(State.STATE_EXP_SIGN, expSignMap);

    // 指数数字
    const expNumberMap = new Map();
    expNumberMap.set(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
    transfer.set(State.STATE_EXP_NUMBER, expNumberMap);

    // 正式处理
    const length = s.length;
    let state = State.STATE_INITIAL;

    for (let i = 0; i < length; i++) {
        const type = toCharType(s[i]);
        if (!transfer.get(state).has(type)) {
            return false;
        } else {
            state = transfer.get(state).get(type);
        }
    }

    return [
        State.STATE_INTEGER,
        State.STATE_POINT,
        State.STATE_FRACTION,
        State.STATE_EXP_NUMBER,
        State.STATE_END
    ].includes(state);
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)
// n === s.length
//leetcode submit region end(Prohibit modification and deletion)
