// 时间复杂度：算法的时间复杂度，它反映的不是算法的逻辑代码到底被执行了多少次，而是随着输入规模的增大，算法对应的执行总次数的一个变化趋势。
// 常见的时间复杂度有(从低到高)：O(1), O(n), O(logn), O(n*logn), O(n^2), O(2^n), O(n!)

// O(n)
export function timeComplexityN(n) {
  let timer = 0;
  for (let i = 0; i < n; i++) {
    timer++;
  }
  console.log(`timeComplexityN 执行了${timer}次`);
}

// O(logn)
export function timeComplexityLogN(n) {
  let timer = 0;
  for (let i = 1; i < n; i = i * 2) {
    timer++;
  }
  console.log(`timeComplexityLogN 执行了${timer}次`);
}
