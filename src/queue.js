const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.tail=null
    this.head=null
  }

  getUnderlyingList() {
    if(!this.head) return null
    return this.head
  }

  enqueue(value) {
    let node=new ListNode(value)
    if (this.tail) this.tail.next = node;
    this.tail=node
    if(this.head===null) this.head=node
    
  }

  dequeue() {
    let returnNode=this.head.value

    this.head=this.head.next

    return returnNode
  }
}

module.exports = {
  Queue
};
