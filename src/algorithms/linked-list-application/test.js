import ListNode, { List } from "./ListNode";

// 1. 链表基础操作：手动操作
function listNodeDemo() {
  // 1. 初始化：传入 val, 指定 next（不指定则为null）
  const ln = new ListNode(1);
  ln.next = new ListNode(3);
  console.log("链表初始化", ln); // 1->3->null

  // 2. 链表元素的追加：在链表尾部指定next
  const ln1 = JSON.parse(JSON.stringify(ln));
  ln1.next.next = new ListNode(4);
  console.log("链表追加", ln1); // 1->3->4->null

  // 3. 在链表两节点之间添加节点：前一个节点.next = 插入，插入.next = 后一个节点
  const ln2 = JSON.parse(JSON.stringify(ln1));
  const node = new ListNode(2);
  const later = ln2.next;
  ln2.next = node;
  node.next = later;
  console.log("链表插入", ln2); // 1->2->3->4->null

  // 4. 链表元素的删除：前一个节点.next = 前一个节点.next.next
  const ln3 = JSON.parse(JSON.stringify(ln2));
  const pre1 = ln3.next;
  pre1.next = pre1.next.next;
  console.log("链表元素的删除", ln3); // 1->3->4->null

  // 5. 链表元素的访问：从第一个节点遍历，直到index
  const index = 2;
  let current = ln3;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  console.log("链表第三个节点是", current); // 4->null
}
listNodeDemo();

// 2. 链表基础操作：通过 List 类提供的方法操作
function listDemo() {
  const l = new List(1);
  console.log("链表初始化", l); // 1->null

  l.push(3);
  l.push(4);
  console.log("链表追加", l); // 1->3->4->null

  l.insert(2, 1);
  console.log("链表插入", l); // 1->2->3->4->null

  l.remove(2);
  console.log("链表元素的删除", l); // 1->2->4->null

  const current2 = l.get(2);
  console.log("链表第三个节点是", current2); // 4->null
}
listDemo();

const list = new ListNode(1);
const listNode2 = (list.next = new ListNode(1));
const listNode3 = (listNode2.next = new ListNode(2));
const listNode4 = (listNode3.next = new ListNode(3));
const listNode5 = (listNode4.next = new ListNode(4));
const listNode6 = (listNode5.next = new ListNode(4));
listNode6.next = new ListNode(4);
console.log("list", list); // 1->1->2->3->4->4->4->null
// 3. 链表单指针法的应用
import {
  concatSortedLinkedlist,
  pickRepeatLinkedlist,
  deleteRepeatLinkedlist,
} from "./single-pointer-method";

const l1 = JSON.parse(JSON.stringify(list));
const l2 = JSON.parse(JSON.stringify(list));
const twoLists = concatSortedLinkedlist(l1, l2); // 1->1->1->1->2->2->3->4->4->4->4->4->4->4->null
console.log("将两个有序链表合并为一个新的有序链表", twoLists);

const l3 = JSON.parse(JSON.stringify(list));
const nonRepeatLists = pickRepeatLinkedlist(l3);
console.log("有序链表去重", nonRepeatLists); // 1->2->3->4->null

const l4 = JSON.parse(JSON.stringify(list));
const emptyRepeatLists = deleteRepeatLinkedlist(l4);
console.log("有序链表清空重复节点", emptyRepeatLists); // 2->3->null

// 4. 链表多指针法的应用
import {
  deleteNEnd,
  reverseList,
  reverseFromM2N,
} from "./mutil-pointer-method";

const l5 = JSON.parse(JSON.stringify(list));
const delete2EndList = deleteNEnd(l5, 2);
console.log("删除链表的倒数第2个结点", delete2EndList); // 1->1->2->3->4->4->null

const l6 = JSON.parse(JSON.stringify(list));
const reversedList = reverseList(l6);
console.log("反转链表", reversedList); // 4->4->4->3->2->1->1->null

const l7 = JSON.parse(JSON.stringify(list));
const reverseFrom225 = reverseFromM2N(l7, 2, 5);
console.log("翻转链表第2到5个元素", reverseFrom225); // 1->4->3->2->1->4->4->null
