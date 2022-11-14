// 1. 两数求和问题：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标

// 普通解法：两层循环来遍历同一个数组，时间复杂度为O(n^2)
export function twoSum1(arr, target) {
  const len = arr.length;
  let timer = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 1 + i; j < len; j++) {
      timer++;
      if (arr[i] + arr[j] === target) {
        console.log("两数求和问题普通解法时间复杂度", timer); // 20
        return [i, j];
      }
    }
  }

  return false;
}

// 优化解法：空间换时间，一层循环，时间复杂度为O(n)
export function twoSum2(arr, target) {
  const len = arr.length;
  const tem = {};
  let timer = 0;

  for (let i = 0; i < len; i++) {
    timer++;
    if (tem[target - arr[i]] !== undefined) {
      console.log("两数求和问题优化解法时间复杂度", timer); // 7
      return [tem[target - arr[i]], i];
    }
    tem[arr[i]] = i;
  }

  return false;
}
