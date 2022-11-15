import { reverse } from "./reverse";
const str = "hello world";
const reversedStr = reverse(str);
console.log("反转字符串", reversedStr);

import { isPalindrome } from "./palindrome";
console.log("hello是回文字符串吗？", isPalindrome(`hello`));
console.log("yessey是回文字符串吗？", isPalindrome(`yessey`));

import { deletedPalindrome } from "./deleted-palindrome";
const str1 = "yesabcbasey";
const str2 = "yesabcddcbsey";
const str3 = "yesabcddcbazsey";
const str4 = "yesabcddcbazysey";
console.log("yesabcbaesy", deletedPalindrome(str1));
console.log("yesabcddcbesy", deletedPalindrome(str2));
console.log("yesabcddcbazesy", deletedPalindrome(str3));
console.log("yesabcddcbazyesy", deletedPalindrome(str4));

import { WordDictionary } from "./word-dictionary";
const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
console.log("wd", wd);
console.log("pad", wd.searchWord("pad"));
console.log("bad", wd.searchWord("bad"));
console.log(".ad", wd.searchWord(".ad"));
console.log("b..d", wd.searchWord("b..d"));

import { atoi } from "./atoi";
console.log("42", atoi("42"));
console.log("-42", atoi("-42"));
console.log("4193 with words", atoi("4193 with words"));
console.log("words and 987", atoi("words and 987"));
console.log("-91283472332", atoi("-91283472332"));
console.log("91283472332", atoi("91283472332"));
