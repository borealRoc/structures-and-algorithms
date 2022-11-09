// 栈：先进后出，进栈和出栈发生在栈顶

class Stack {
    constructor() {
        this.stack = []
    }
    // 进栈
    push(ele) {
        this.stack.push(ele)
    }
    // 出栈
    pop() {
        return this.stack.pop()
    }
    // 栈顶元素
    peek() {
        return this.stack[this.stack.length-1]        
    }
    // 栈的长度
    size() {
        return this.stack.length
    }
    isEmpty() {
        return this.size() === 0
    }
}

export default Stack