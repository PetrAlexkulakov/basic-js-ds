const { NotImplementedError } = require('../extensions/index.js');

 //const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
  constructor(){
    this.roo=null;
  }

  root() {
    return this.roo;
  }

  add(data) {
    let newNode= new Node(data);

    if(this.roo===null) this.roo = newNode;
    else{
      this._insertNode(this.roo, newNode);
    }
  }

  _insertNode(oldNode,newNode){
    if(newNode.data < oldNode.data){
        if(oldNode.left===null){
          oldNode.left=newNode;
        }
    else{
      this._insertNode(oldNode.left,newNode);
    }
  }else{
    if(oldNode.right===null){
      oldNode.right=newNode;
    }
else{
  this._insertNode(oldNode.right,newNode);
}
}
}

  has(data) {
    if (this.find(data)===null) return false
    return true
  }

  find(data, node = this.roo) {
    if(node===null||node.data===null) return null;

    if(data<node.data) return this.find(data, node.left);

    if(data>node.data) return this.find(data, node.right);

    if(data==node.data) return node;
  }

  remove(data) {
    this.roo=this._removeNode(this.roo,data);
  }

  _removeNode(node,key){
    if(node===null) return null;

    if(key<node.data){
      node.left = this._removeNode(node.left,key)
      return node
    }
    else if(key>node.data){
      node.right = this._removeNode(node.right,key)
      return node
    }
    else{
      if(node.left===null && node.right===null){
        node=null;
        return node;
      }
      if(node.left===null){
        node=node.right
        return node
      }
      if(node.right===null){
        node=node.left
        return node
      }

      let aux=this._findMinNode(node.right);
      node.data = aux.data;

      node.right = this._removeNode(node.right, aux.data);
      return node;
    }
  }

  min() {
    return this._findMinNode(this.roo).data
  }

  _findMinNode(node){
    if(node.left===null){
      return node;
    }
    return this._findMinNode(node.left)
  }

  max() {
    return this._findMaxNode(this.roo).data
  }
  _findMaxNode(node){
    if(node.right===null){
      return node;
    }
    return this._findMaxNode(node.right)
  }
}

module.exports = {
  BinarySearchTree
};

// let tree= new BinarySearchTree();
// console.log(tree.root());