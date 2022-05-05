export class Fizzbuzz {

  check (num: number): string {

    if(!this.isValidNumber(num)) return "Invalid value";

    if(this.isMultiple(num,3) && this.isMultiple(num,5)) return "FizzBuzz";

    if(this.isMultiple(num,3)) return "Fizz";

    if(this.isMultiple(num,5)) return "Buzz";

    return num.toString();
  }

  isMultiple (numerator: number, denominator: number): boolean {
    return numerator % denominator == 0 ? true : false; 
  }

  isValidNumber(num: number){
    return num < 0 || num > 100 ? false : true;
  }
}