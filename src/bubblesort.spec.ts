import { describe } from "mocha";
import { Bubblesort } from "./bubblesort";
import { expect } from "chai";

describe("bubblesort", () => {
  it("test 1", () => {
    const x = [5, 4, 3, 2, 1, 7, 8];
    Bubblesort(x);
    expect(x).to.deep.eq([1, 2, 3, 4, 5, 7, 8]);
  });
  it("test 2", () => {
    const x = [1];
    Bubblesort(x);
    expect(x).to.deep.eq([1]);
  });
  it("test 3", () => {
    const x: number[] = [];
    Bubblesort(x);
    expect(x).to.deep.eq([]);
  });
});
