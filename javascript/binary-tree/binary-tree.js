'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
    this.valuesArray = [];
  }

  // Pre-order: root >> left >> right
  preOrderTraversal(current) {
    try {
      this.valuesArray.push(current.value);

      if (current.left !== null) {
        this.preOrderTraversal(current.left);
      }

      if (current.right !== null) {
        this.preOrderTraversal(current.right);
      }
    } catch (error) {
      throw `Unable to pre-order binary tree: ${error}`;
    }
  }

  // returns array of values, ordered appropriately (pre-order)
  getPreOrder() {
    try {
      // clear out array
      this.valuesArray = [];

      this.preOrderTraversal(this.root);
      return this.valuesArray;
    } catch (error) {
      throw `Unable to return array of values in pre-order: ${error}`;
    }
  }


  // In-order: left >> root >> right
  inOrderTraversal(current) {
    try {
      if (current.left !== null) {
        this.inOrderTraversal(current.left);
      }

      this.valuesArray.push(current.value);

      if (current.right !== null) {
        this.inOrderTraversal(current.right);
      }
    } catch (error) {
      throw `Unable to in-order binary tree: ${error}`;
    }
  }

  // returns array of values, ordered appropriately (In-order)
  getInOrder() {
    try {
      // clear out array
      this.valuesArray = [];

      this.inOrderTraversal(this.root);
      return this.valuesArray;
    } catch (error) {
      throw `Unable to return array of values in-order: ${error}`;
    }
  }

  // Post-order: left >> right >> root
  postOrderTraversal(current) {
    try {
      if (current.left !== null) {
        this.postOrderTraversal(current.left);
      }

      if (current.right !== null) {
        this.postOrderTraversal(current.right);
      }

      this.valuesArray.push(current.value);
    } catch (error) {
      throw `Unable to post-order binary tree: ${error}`;
    }
  }

  // returns array of values, ordered appropriately (Post-order)
  getPostOrder() {
    try {
      // clear out array
      this.valuesArray = [];

      this.postOrderTraversal(this.root);
      return this.valuesArray;
    } catch (error) {
      throw `Unable to return array of values in post-order: ${error}`;
    }
  }
}

module.exports = BinaryTree;
