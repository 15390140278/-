function Link() {
  this.head = null
  this.length = 0
}

Link.prototype.add = function (node) {
  if (this.head == null) {
    this.head = node
  }
  let cur = this.head
  while (!cur.next) {
    cur.next = node
    cur = cur.next
  }
  this.length++
}

function Node(value) {
  this.value = value
}

let node = new Node('a')
let link = new Link()
link.add(node)

console.log(link)
