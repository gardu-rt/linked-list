class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  at(index) {
    if (index < 0 || index > this.length) {
      throw new Error("index out of range");
    }
    let count = 0;
    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  pop() {
    if (!this.head) throw new Error("can't read null properties");
    if (this.head.next === null) {
      this.head = null;
      this.tail = this.head;
    }

    let prev = this.head;
    let current = prev.next;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    return current;
  }

  contains(value) {
    if (!this.head) throw new Error("can't read null property");

    let node = this.head;
    while (node) {
      if (value === node.value) return true;
      node = node.next;
    }

    return false;
  }
}
