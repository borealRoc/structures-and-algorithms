import ListNode, { List } from "./ListNode";
// 1. 链表基础操作：手动操作
// 1. 初始化：传入 val, 指定 next（不指定则为null）
const l = new ListNode(1);
l.next = new ListNode(3);
console.log("链表初始化", l);
// 2. 链表元素的追加：在链表尾部指定next
l.next.next = new ListNode(4);
console.log("链表追加", l);
// 3. 在链表两节点之间添加节点：前一个节点.next = 插入，插入.next = 后一个节点
const ln = new ListNode(2);
const pre = l;
const later = l.next;
pre.next = ln;
ln.next = later;
console.log("链表插入", l);
// 4. 链表元素的删除：前一个节点.next = 前一个节点.next.next
const pre1 = l.next;
pre1.next = pre1.next.next;
console.log("链表元素的删除", l);
// 5. 链表元素的访问：从第一个节点遍历，直到index
const index = 2;
let current = l;
for (let i = 0; i < index; i++) {
  current = current.next;
}
console.log("链表第三个节点是", current);

// 2. 链表基础操作：通过 List 类提供的方法操作
const list = new List(1)
console.log('链表初始化', list)
list.push(3)
list.push(4)
console.log("链表追加", list);
list.insert(2, 1)
console.log("链表插入", list);
list.remove(2)
console.log("链表元素的删除", list);
const node2 = list.get(2)
console.log("链表第三个节点是", node2);

// 3. 链表单指针法的应用 
import { concatSortedLinkedlist, pickRepeatLinkedlist,deleteRepeatLinkedlist } from "./single-pointer-method";
const twoLists = concatSortedLinkedlist(l, list.head);
console.log("将两个有序链表合并为一个新的有序链表", twoLists);
const nonRepeatLists = pickRepeatLinkedlist(twoLists);
console.log("有序链表去重", nonRepeatLists);
const list3 = new ListNode(1)
const list3Node2 = list3.next = new ListNode(1)
const list3Node3 = list3Node2.next = new ListNode(2)
const list3Node4 = list3Node3.next = new ListNode(3)
const list3Node5 = list3Node4.next = new ListNode(4)
list3Node5.next = new ListNode(4)
console.log('list3', list3)
const emptyRepeatLists = deleteRepeatLinkedlist(list3)
console.log('有序链表清空重复节点', emptyRepeatLists)

