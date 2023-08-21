import { describe } from "mocha";
import { Bubblesort } from "../src/bubblesort";
import { expect } from "chai";

describe("bubblesort", () => {
  it("test 1", () => {
    const x = [5, 4, 3, 2, 1, 7, 8];
    Bubblesort(x);
    expect(x).to.deep.eq([1, 2, 3, 4, 5, 7, 8]);
  });
  it("test 1", () => {
    const x = [1, 3, 2, 4, 6, 8, 10, 213];
    Bubblesort(x);
    expect(x).to.deep.eq([1, 2, 3, 4, 6, 8, 10, 213]);
  });
});
