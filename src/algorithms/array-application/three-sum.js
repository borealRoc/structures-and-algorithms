// 三数求和问题：给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0. 找出所有满足条件“且不重复”的三元组

// 普通解法：三层循环，时间复杂度高，且要实现三元组不重复很难
export function threeSum1(arr) {
  const len = arr.length;
  const res = [];

  let timer = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 1 + i; j < len; j++) {
      for (let k = 1 + j; k < len; k++) {
        timer++;
        if (arr[i] + arr[j] + arr[k] === 0) {
          res.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  console.log("三数求和问题--三层循环解法时间复杂度", timer); // 120
  return res;
}

// 优化解法：对撞指针，左右指针一起从两边往中间位置相互迫近，适用于“有序的数组”
export function threeSum2(arr) {
  // 先将数组进行从小到大排序
  arr = arr.sort((a, b) => a - b);

  let res = [];
  let m = 0;
  let n = 0;
  const len = arr.length;

  let timer = 0;

  for (let i = 0; i < len - 2; i++) {
    m = i + 1;
    n = len - 1;

    // 如果遇到重复的数字，则跳过
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    while (m < n) {
      timer++;
      
      if (arr[i] + arr[m] + arr[n] < 0) {
        m++;
        //  处理左指针元素重复的情况
        while (m < n && arr[m] === arr[m - 1]) {
          m++;
        }
      } else if (arr[i] + arr[m] + arr[n] > 0) {
        n--;
        // 处理右指针元素重复的情况
        while (m < n && arr[n] === arr[n - 1]) {
          n--;
        }
      } else {
        res.push([arr[i], arr[m], arr[n]]);
        m++;
        n--;
        // 若左指针元素重复，跳过
        while (m < n && arr[m] === arr[m - 1]) {
          m++;
        }
        // 若右指针元素重复，跳过
        while (m < n && arr[n] === arr[n - 1]) {
          n--;
        }
      }
    }
  }

  console.log("三数求和问题--双指针法时间复杂度", timer); // 24
  return res;
}
