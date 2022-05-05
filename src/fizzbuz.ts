export class Fizzbuzz {

  check (num: number): string {

    if(num % 3 == 0){
      return "Fizz";
    }

    return num.toString();
  }
}