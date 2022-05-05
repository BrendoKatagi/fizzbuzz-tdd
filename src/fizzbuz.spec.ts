import { Fizzbuzz } from "./fizzbuz";

let fb: Fizzbuzz = new Fizzbuzz();

beforeEach(() => {
  fb = new Fizzbuzz();
});

describe("FizzBuzz", () => {
  test("Should return 1 for entry 1", () => {
    expect(fb.check(1)).toBe("1");
  })

  test("Should return 2 for entry 2", () => {
    expect(fb.check(2)).toBe("2");
  })

  test("Should return Fizz for multiples of 3", () => {
    expect(fb.check(3)).toBe("Fizz");
  })
})