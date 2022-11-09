import Stack from "./index";

const fruits = new Stack()
fruits.push('苹果')
fruits.push('鸭梨')
fruits.push('香蕉')

while (!fruits.isEmpty()) {
    console.log(`从水果里取出${fruits.pop()}`)
}