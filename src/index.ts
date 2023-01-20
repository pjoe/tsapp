export class Hello {
  public sayHello() {
    return "hello, world!";
  }
}

export function countWords(word: string) {
  return word.split(" ").length;
}
