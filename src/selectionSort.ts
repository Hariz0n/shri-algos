const SelectionSort = (arr: number[]) => {
  const result = [...arr];
  if (result.length < 2) return result;

  for (let i = 0; i < result.length - 1; i++) {
    let index = i;
    let min = result[i];
    for (let j = i; j < result.length; j++) {
      if (min > result[j]) {
        min = result[j];
        index = j;
      }
    }

    if (index === i) continue;

    result[index] = result[i];
    result[i] = min;
  }

  return result;
};
