type Node<T> = {
  value: T;
  children?: Node<T>[];
};

type callback<T> = (node: Node<T>) => void;

export const dfs = <T>(node: Node<T>, callback: callback<T>): T[] => {
  const stack = [node];
  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    callback(currentNode);
    if (currentNode.children) {
      for (let i = currentNode.children.length - 1; i >= 0; i--) {
        stack.push(currentNode.children[i]);
      }
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

dfs(tree, (node) => {
  console.log(node.value);
});
