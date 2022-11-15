// 实现一个 atoi 函数，使其能将字符串转换成整数
// 1. 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止
// 2. 当寻找到的第一个非空字符为正或者负号时，则将该符号作为该整数的正负号；
// 3. 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数
// 4. 只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31)
// 5. 在任何情况下，若函数不能进行有效的转换时，请返回 0

export function atoi(str) {
  // 1. 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止
  // 2. 当寻找到的第一个非空字符为正或者负号时，则将该符号作为该整数的正负号；
  // 3. 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数
  const reg = /\s*([-\+]?[0-9]*).*/;
  const groups = str.match(reg);

  let num = 0;
  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;

  if (groups) {
    // 将捕获到的结构转换为数字
    num = +groups[1];
    // 5. 在任何情况下，若函数不能进行有效的转换时，请返回 0
    if (isNaN(num)) {
      return 0;
    }
  }

  // 4. 只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31)
  if (num > max) {
    return max;
  } else if (num < min) {
    return min;
  }

  return num;
}
