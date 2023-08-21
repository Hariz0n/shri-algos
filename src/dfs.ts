type Node<T> = {
  value: T;
  children?: Node<T>[];
};

type callback<T> = (value: T) => boolean;

export const dfs = <T>(node: Node<T>, callback: callback<T>): T[] => {
  const stack = [node];
  while (stack.length) {
    const currentNode = stack[stack.length - 1];
    if (callback(currentNode.value)) {
      return stack.reduce((previousValue: T[], currentValue) => {
        previousValue.push(currentValue.value);
        return previousValue;
      }, []);
    }
    if (currentNode.children) {
      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    } else {
      stack.pop();
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
  ],
};

console.log(dfs(tree, (value) => value === 4));
