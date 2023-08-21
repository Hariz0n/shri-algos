export const Bubblesort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i = -1;
    }
  }
};

const x = [5, 4, 3, 2, 1, 7, 8];
Bubblesort(x);

console.log(x);
