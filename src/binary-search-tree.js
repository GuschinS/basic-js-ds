const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.obj = {
      values: [],
      data: null,
    };
  }
  root() {
    if (this.obj.values.length) {
      this.obj.data = this.obj.values[0];
      return this.obj;
    } else {
      return null;
    }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  add(data) {
    this.obj.values.push(data);
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has(data) {
    return this.obj.values.indexOf(data) > -1;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(data) {
    if (this.obj.values.indexOf(data) > -1) {
      this.obj.data = data;
      return this.obj;
    } else {
      return null;
    }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(data) {
    this.obj.values.splice(this.obj.values.indexOf(data), 1);
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    return Math.min.apply(null, this.obj.values);
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    return Math.max.apply(null, this.obj.values);
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
