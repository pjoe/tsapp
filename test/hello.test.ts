import { Hello, countWords } from "../src";

test("hello", () => {
  expect(new Hello().sayHello()).toBe("hello, world!");
});

test("count words", () => {
  expect(countWords("hello world")).toBe(2);
});
