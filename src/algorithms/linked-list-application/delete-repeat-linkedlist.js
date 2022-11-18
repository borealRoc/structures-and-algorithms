// 删除问题的延伸，借助 dummy 结点：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字

import ListNode from "./ListNode";

export function deleteRepeatLinkedlist(l) {
  // 如果链表是空或链表只有一个节点，直接返回
  if (!l || !l.next) {
    return l;
  }

  // 借助一个空节点 dummy, 使得dummy.next 指向链表第一个元素
  const dummy = new ListNode();
  dummy.next = l;
  let cur = dummy;

  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      cur.next = cur.next.next.next
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}
