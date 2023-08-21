export const insertionSort = (arr: number[]) => {
  const result = [...arr];

  if (result.length < 2) return result;

  for (let i = 1; i < result.length; i++) {
    const value = result[i];
    let j = i;
    while (result[j - 1] > value && j > 0) {
      result[j] = result[j - 1];
      j--;
    }
    result[j] = value;
  }

  return result;
};
