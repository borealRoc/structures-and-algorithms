// 链表的合并：将两个有序链表合并为一个新的有序链表并返回

import ListNode from "./ListNode";

export function concatSortedLinkedlist(l1, l2) {
  let list = new ListNode();
  let cur = list;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;

  return list.next;
}
