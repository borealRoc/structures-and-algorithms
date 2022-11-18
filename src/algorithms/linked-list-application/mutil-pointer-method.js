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
// export function reverseList(l) {
//   let pre = null;
//   let cur = l;
//   pre.next = cur;

//   while (cur) {
//     let later = cur.next

//     later.next
//     cur = cur.next;
//   }
// }
