import LinkedList from ".";

const nn = new LinkedList()

nn.push('AAA')
nn.push('BBB')
nn.push('DDD')
nn.insert('CCC', 2)
nn.pop()
nn.removeAt(0)
console.log('链表', nn)
console.log(nn.getIndex('CCC'))
console.log(nn.getNode(1))

