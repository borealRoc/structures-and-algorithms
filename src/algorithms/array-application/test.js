import { twoSum1, twoSum2 } from "./two-sum";

const nums = [2, 7, 11, 15, 20, 30, 40];
const target = 60;
// 因为 nums[4] + nums[6] = 20 + 7 = 60 所以返回 [4, 6]
const res1 = twoSum1(nums, target);
console.log("两数求和", res1);
const res2 = twoSum2(nums, target);
console.log("两数求和", res2);

import { twoSortedArray1, twoSortedArray2 } from "./two-sorted-array";
const arr1 = [3, 4, 7, 8, 10];
const arr2 = [2, 5, 6];
console.log("数组合并后自动排序", twoSortedArray1(arr1, arr2));
console.log("数组合并后自动排序", twoSortedArray2(arr1, arr2));

import { threeSum1, threeSum2 } from "./three-sum";
const arr3 = [-1, 0, 1, 2, -1, -4, -7, 4, 3, 3];
const res3 = threeSum1(arr3);
console.log("三数求和", res3);
const res4 = threeSum2(arr3)
console.log("三数求和", res4);