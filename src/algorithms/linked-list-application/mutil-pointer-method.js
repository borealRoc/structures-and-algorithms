// 链表的多指针法
import ListNode from "./ListNode";

// 1. 快慢指针——删除链表的倒数第 N 个结点
export function deleteNEnd(l, n) {
  let dummy = new ListNode();
  dummy.next = l;

  let fast = dummy;
  let slow = dummy;

  while (n) {
    fast = fast.next;
    n--;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}

// 2. 多指针法——链表的反转
export function reverseList(l) {
  let pre = null;
  let cur = l;

  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
}

// 3. 反转第 m 到 第n （1 ≤ m ≤ n ≤ 链表长度）的链表（使用一趟扫描完成反转）
export function reverseFromM2N(l, m, n) {
  let dummy = new ListNode();
  dummy.next = l;

  // 1. 用left缓存m之前的元素
  let pre = dummy;
  let left = null;
  for (let i = 1; i < m; i++) {
    pre = pre.next;
  }
  left = pre;

  // 2. 翻转m到n之间的元素
  let start = pre.next;
  pre = start;
  let cur = start.next;

  for (let i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  // 3. 翻转完成后，让left->翻转后的链表->cur
  left.next = pre;
  start.next = cur;

  return l;
}
