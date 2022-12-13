import reverseString from "./reverseString";

test("Reverse lowercase string", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("Reverse uppercase string", () => {
  expect(reverseString("HELLO")).toBe("OLLEH");
});

test("Reverse string with symbols, spaces, lowercase, uppercase and numbers", () => {
  expect(reverseString("This is Python! Oh, no, I mean...")).toBe("...naem I ,on ,hO !nohtyP si sihT");
});
