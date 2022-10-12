const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k){
    if(l === null){
        return l;
    }
    while(l.value === k){
        l = l.next;
    }
    node = l;
    nextNode = node.next;
    while(nextNode !== null){
        if(node.value===k){ 
            node.value=nextNode.value
            node.next=nextNode.next

            if(node.next === null) break
        }
        else if(nextNode.value === k){
            node.next = nextNode.next
            
            if(node.next === null) break
        }
        
        node = node.next
        nextNode = node.next
    }

    return l;
}

module.exports = {
  removeKFromList
};

