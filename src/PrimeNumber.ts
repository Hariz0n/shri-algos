const PrimeNumber = (n: number) => {
  const result: number[] = [];
  const nums = Array.from({ length: n - 1 }, (v, k) => 2 + k);
  nums.forEach((val, i) => {
    if (val === -1) return;
    result.push(val);
    for (let j = i; j < nums.length; j++) {
      if (nums[j] !== -1 && nums[j] % val === 0) {
        nums[j] = -1;
      }
    }
  });
  return result;
};

console.log(PrimeNumber(26));
