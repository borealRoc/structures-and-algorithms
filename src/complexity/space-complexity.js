// 空间复杂度：一个算法在运行过程中临时占用存储空间大小的量度
// 常见的空间复杂度有 O(1)、O(n) 和 O(n^2)

// O(1)
export function spaceComplexity1(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    console.log(arr[i]);
  }
}
// 在 spaceComplexity1 中，占用空间的有以下变量：arr, len, i;
// 后面尽管咱们做了很多次循环，但是这些都是时间上的开销。循环体在执行时，并没有开辟新的内存空间。因此，整个函数对内存的占用量是恒定的，它对应的空间复杂度就是 O(1)

// O(n)
export function spaceComplexityN(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = i;
  }
  return arr;
}
// 在 spaceComplexityN 中，涉及到的占用内存的变量有以下几个：arr, n, i
// 这里这个 arr，它并不是一个一成不变的数组。arr最终的大小是由输入的 n 的大小决定的，它会随着 n 的增大而增大、呈一个线性关系。因此这个算法的空间复杂度就是 O(n)