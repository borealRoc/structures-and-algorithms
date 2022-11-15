// 判断是否是回文字符串：正着读和倒着读都一样的字符串

import { reverse } from "./reverse";

export function isPalindrome(str) {
    const reversedStr = reverse(str)
    return str === reversedStr
}