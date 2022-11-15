// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串（字符串只包含从 a-z 的小写字母）

export function deletedPalindrome(s) {
  const len = s.length;
  let i = 0;
  let j = len - 1;

  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  // 跳过左指针一个元素后，判断字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  // 跳过右指针一个元素后，判断字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  return false;
}
