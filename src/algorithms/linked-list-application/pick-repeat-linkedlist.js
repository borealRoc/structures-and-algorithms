// 链表结点的删除：删除一个有序链表重复的元素，使得每个元素只出现一次

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
