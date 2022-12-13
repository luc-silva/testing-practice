import capitalize from "./capitalize";

test("Uppercase first letter:", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
test("Uppercase first letter:", () => {
  expect(capitalize("world")).toBe("World");
});
test("Uppercase first letter:", () => {
  expect(capitalize("you should drink water")).toBe("You should drink water");
});
