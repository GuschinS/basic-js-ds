// const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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
  constructor() {
    this.queue = null;
  }
  getUnderlyingList() {
    return this.queue;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    let list = this.queue;
    if (!this.queue) {
      this.queue = new ListNode(value);
      return this.queue;
    }

    while (list.next) {
      list = list.next;
    }
    list.next = new ListNode(value);
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    let value = this.queue.value;
    this.queue = this.queue.next;
    return value;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue,
};
