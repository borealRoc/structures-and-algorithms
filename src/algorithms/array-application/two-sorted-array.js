// 2. 合并两个有序数组：给你两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组

// 普通解法：先合并再排序，时间复杂度为O(n^2)
export function twoSortedArray1(arr1, arr2) {
  arr1 = [...arr1, ...arr2];
  const len = arr1.length;
  let tem = null;
  let timer = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 1 + i; j < len - 1; j++) {
      timer++;
      if (arr1[i] > arr1[j]) {
        tem = arr1[j];
        arr1[j] = arr1[i];
        arr1[i] = tem;
      }
    }
  }
  console.log("数组合并后自动排序--普通解法时间复杂度", timer); // 21
  return arr1;
}

// 优化解法：双指针法，时间复杂度为O(n)
// 首先定义两个指针，各指向两个数组生效部分的尾部，每次只对指针所指的元素进行比较；
// 取其中较大的元素，把它从 nums1 的末尾往前面填补；
// 如果提前遍历完的是 nums1 的有效部分，剩下的是 nums2。那么这时意味着 nums1 的头部空出来了，直接把 nums2 整个补到 nums1 前面去即可
// 如果提前遍历完的是 nums2，剩下的是 nums1。由于容器本身就是 nums1，所以此时不必做任何额外的操作
export function twoSortedArray2(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  let k = m + n - 1;

  let timer = 0;

  while (m > 0 && n > 0) {
    timer++;
    if (arr1[m - 1] > arr2[n - 1]) {
      arr1[k] = arr1[m - 1];
      k--;
      m--;
    } else {
      arr1[k] = arr2[n - 1];
      k--;
      n--;
    }
  }

  while (n > 0) {
    timer++;
    arr1[k] = arr2[n - 1];
    k--;
    n--;
  }

  console.log("两个数组合并后自动排序--双指针法时间复杂度", timer);  // 8
  return arr1;
}
