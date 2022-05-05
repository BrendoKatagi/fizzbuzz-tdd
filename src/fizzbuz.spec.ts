import { Fizzbuzz } from "./fizzbuz";

let fb: Fizzbuzz = new Fizzbuzz();

beforeEach(() => {
  fb = new Fizzbuzz();
});

describe("FizzBuzz", () => {
  test("Should return 1 for entry 1", () => {
    expect(fb.check(1)).toBe(1);
  })
})