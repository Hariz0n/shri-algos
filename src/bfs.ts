type Node<T> = {
  value: T;
  children?: Node<T>[];
};

type callback<T> = (node: Node<T>) => void;

class Queue<T> {
  item: QueueItem<T> | null = null;
  first = 0;
  count = 0;
  constructor() {}

  append(value: T) {
    if (!this.item) {
      this.item = new QueueItem<T>(value);
    } else {
      let current = this.item;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new QueueItem<T>(value);
    }
    this.count += 1;
  }

  shift() {
    if (!this.item) {
      this.count -= 1;
      return null;
    } else {
      this.count -= 1;
      const result = this.item.value;
      this.item = this.item.next;
      return result;
    }
  }
}

class QueueItem<T> {
  value: T;
  next: QueueItem<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export const bfs = <T>(node: Node<T>, callback: callback<T>): T[] => {
  const line = new Queue<Node<T>>();
  line.append(node);
  while (line.count > 0) {
    const currentNode = line.shift()!;
    callback(currentNode);
    if (currentNode.children) {
      currentNode.children.forEach((child) => line.append(child));
    }
  }

  return [];
};

const tree: Node<number> = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
        },
        {
          value: 4,
        },
      ],
    },
    {
      value: 10,
    },
  ],
};

bfs(tree, (node) => {
  console.log(node.value);
});
