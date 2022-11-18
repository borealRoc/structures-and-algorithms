class ListNode {
  constructor(val) {
    this.val = val ? val : null;
    this.next = null;
  }
}

export class List {
  constructor(val) {
    this.head = new ListNode(val);
  }

  push(val) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(val);
  }

  insert(val, index) {
    let insertNode = new ListNode(val);
    const pre = this.get(index-1);
    const later = pre.next;
    pre.next = insertNode;
    insertNode.next = later;
  }

  remove(index) {
    const pre = this.get(index - 1);
    pre.next = pre.next.next;
  }

  get(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

export default ListNode