// 链表：每个元素由一个存储自身元素的节点和指向下一个元素的引用组成：`head->node(e, next)->...->null`
// 优点：添加和移除元素很快 -- 不需要移动其它元素，时间复杂度为O(1)
// 缺点：查找元素慢 -- 在数组中，我们可以直接访问任何位置的任何元素，而要想访问链表中的一个元素，则需要从起点（表头）开始迭代链表直到找到所需的元素

export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // 1. 增添元素
  // 1.1 在链表尾部增添元素
  push(ele) {
    if (ele == undefined) {
      throw new Error(`undefined cann't be push into linkedlist`);
    }

    const node = new Node(ele);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      for (let i = 1; i < this.length; i++) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
    return true;
  }
  // 1.2 在链表任意位置增添元素
  insert(ele, index) {
    if (ele == undefined) {
      throw new Error(`undefined cann't be inset into linkedlist`);
    }
    console.log("index", index);
    if (index < 0) {
      throw new Error(`index should be bigger than 0`);
    }
    const size = this.size();
    if (index > size) {
      throw new Error(`${index} exceed linkedlist size`);
    }

    const node = new Node(ele);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const prev = this.getNode(index - 1);
      const later = prev.next;
      prev.next = node;
      node.next = later;
    }

    this.length++;
    return true;
  }

  // 2. 删除元素
  // 2.1 在链表尾部移除元素
  pop() {
    const size = this.size();
    if (size <= 0) {
      throw new Error(`empty linkedlist cant't be pop`);
    }

    if (size === 1) {
      this.head = null;
    } else {
      let current = this.head;
      for (let i = 0; i < size - 2; i++) {
        current = current.next;
      }
      current.next = null;
    }

    this.length--;
    return true;
  }

  // 2.2 在链表任意位置移除元素
  removeAt(index) {
    const size = this.size();
    if (size <= 0) {
      throw new Error(`empty linkedlist cant't be remove any node`);
    }
    if (index >= size) {
      throw new Error(`${index} should be samller than linkedlist size`);
    }
    if (index < 0) {
      throw new Error(`${index} should be bigger than 0`);
    }
    if (index === 0) { 
        this.head = this.head.next
    } else {
        const prev = this.getNode(index - 1);
        const later = prev.next.next;
        prev.next = later;
    }
    this.length--;
    return true;
  }

  // 3. 索引
  // 3.1 返回某个值在链表中首次出现的索引，如果链表中没有该元素则返回-1
  getIndex(ele) {
    if (ele == undefined) {
      throw new Error(`undefined cann't be found in linkedlist`);
    }
    const size = this.size();
    let current = this.head;
    for (let i = 0; i < size; i++) {
      if (current.value === ele) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  // 3.2 返回特定索引的节点
  getNode(index) {
    const size = this.size();
    if (index >= size) {
      throw new Error(`${index} should be samller than linkedlist size`);
    }
    if (index < 0) {
      throw new Error(`${index} should be bigger than 0`);
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // 4. 其它
  size() {
    return this.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

export default LinkedList;
