// 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母

export class WordDictionary {
  constructor() {
    this.words = {};
  }

  // 为了降低后续查找时的复杂度，把相同长度的字符串存在一个数组中
  addWord(word) {
    const len = word.length;
    if (this.words[len]) {
      this.words[len].push(word);
    } else {
      this.words[len] = [word];
    }
  }

  searchWord(str) {
    const len = str.length;

    // 如果words不存在字符长度的key，那么肯定没有这个字符
    if (!this.words[len]) {
      return false;
    }

    // 如果字符不含.则说明是搜索文字
    if (!str.includes(".")) {
      return this.words[len].includes(str);
    }

    // 如果是搜索正则表达式字符串，只要有一个匹配，则返回true
    const reg = new RegExp(str);
    return this.words[len].some((item) => reg.test(item));
  }
}
