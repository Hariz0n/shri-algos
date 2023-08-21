enum bracs {
  "]" = "[",
  ")" = "(",
  "}" = "{",
}

type closingBrackets = "]" | ")" | "}";
type openingBrackets = "[" | "(" | "{";

const closingBrackets = new Map<closingBrackets, openingBrackets>([
  [")", "("],
  ["}", "{"],
  ["]", "["],
]);

const openingBrackets = new Map<openingBrackets, closingBrackets>([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
]);

export const Brackets = (brackets: string) => {
  if (brackets.length === 0) return true;

  const stack: string[] = [];
  for (let i = 0; i < brackets.length; i++) {
    stack.push(brackets[i]);
    if (stack.length < 2) continue;
    if (closingBrackets.has(stack[stack.length - 1] as closingBrackets)) {
      if (
        closingBrackets.get(stack[stack.length - 1] as closingBrackets) !==
        stack[stack.length - 2]
      ) {
        return false;
      } else {
        stack.pop();
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};
