import Queue from './index';

const queue = new Queue()
queue.enqueue('小明')
queue.enqueue('小红')
queue.enqueue('小文')
queue.enqueue('小许')

while(!queue.isEmpty()) {
    console.log(`${queue.dequeue()}走两步`)
}
