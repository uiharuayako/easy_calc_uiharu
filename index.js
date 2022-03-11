import * as math from "mathjs"

export const app = {
    name: 'calc',
    jia: function (num1, num2) {
        // 对两个数执行加法运算
        return math.add(num1, num2);
    },
    jian: function (num1, num2) {
        // 计算num1-num2
        return math.add(num1, -num2);
    },
    cheng: function (num1, num2) {
        // 计算num1*num2
        return math.dotMultiply(num1, num2);
    },
    chu: function (num1, num2) {
        // 计算num1/num2
        return math.dotDivide(num1, num2);
    },
    calc: function (str) {
        // 计算表达式的值
        return math.evaluate(str);
    }
};