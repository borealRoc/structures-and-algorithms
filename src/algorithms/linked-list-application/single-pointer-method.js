// 链表的单指针法
import ListNode from "./ListNode";

// 1. 链表的合并：将两个有序链表合并为一个新的有序链表并返回
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

// 2. 链表结点的删除：删除一个有序链表重复的元素，使得每个元素只出现一次
export function pickRepeatLinkedlist(l) {
  let cur = l;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return l;
}

// 3. 删除问题的延伸，借助 dummy 结点：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字
// dummy 结点：处理掉头结点为空的边界问题
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
      cur.next = cur.next.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}
