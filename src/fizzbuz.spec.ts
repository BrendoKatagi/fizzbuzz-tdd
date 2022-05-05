import { Fizzbuzz } from "./fizzbuz";

let fb: Fizzbuzz = new Fizzbuzz();

beforeEach(() => {
  fb = new Fizzbuzz();
});

describe("FizzBuzz", () => {

  test("Should accept only numbers between 1 and 100", () => {
    expect(fb.check(-3)).toBe("Invalid value");
    expect(fb.check(105)).toBe("Invalid value");
    expect(fb.check(-15)).toBe("Invalid value");
    expect(fb.check(150)).toBe("Invalid value");

  })

  test("Should return 1 for entry 1", () => {
    expect(fb.check(1)).toBe("1");
  })

  test("Should return 2 for entry 2", () => {
    expect(fb.check(2)).toBe("2");
  })

  test("Should return Fizz for multiples of 3", () => {
    expect(fb.check(3)).toBe("Fizz");
    expect(fb.check(12)).toBe("Fizz");
    expect(fb.check(33)).toBe("Fizz");
  })

  test("Should return Buzz for multiples of 5", () => {
    expect(fb.check(5)).toBe("Buzz");
    expect(fb.check(20)).toBe("Buzz");
    expect(fb.check(55)).toBe("Buzz");
  })

  test("Should return FizzBuzz for multiples of both 3 and 5", () => {
    expect(fb.check(15)).toBe("FizzBuzz");
    expect(fb.check(30)).toBe("FizzBuzz");
    expect(fb.check(45)).toBe("FizzBuzz");
  })
})