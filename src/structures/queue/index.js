// 队列：先进先出，进队发生在队尾，出队发生在队首

class Queue {
  constructor() {
    this.queue = [];
  }
  // 进队
  enqueue(ele) {
    this.queue.push(ele);
  }
  // 出队
  dequeue() {
    return this.queue.shift();
  }

  // 队首元素
  front() {
    return this.queue[0];
  }
  // 队的长度
  size() {
    return this.queue.length
  }
  // 队列是否为空
  isEmpty() {
    return this.size() === 0
  }
}


export default Queue