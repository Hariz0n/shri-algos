interface ILinkedList<T> {
  value: T;
  next: ILinkedList<T> | null;
}

const ReverseLinkedList = <T>(linkedList: ILinkedList<T>): ILinkedList<T> => {
  let next = linkedList.next;
  let current = linkedList;
  current.next = null;
  while (next !== null) {
    console.log("next", next);
    console.log("curr", current);
    console.log(current);
    const newNext = next.next;
    next.next = current;
    current = next;
    next = newNext;
  }
  linkedList = current;
  return linkedList;
};

console.log(
  ReverseLinkedList({
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  })
);
