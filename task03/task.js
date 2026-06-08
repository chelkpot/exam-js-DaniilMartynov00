/**
 * ЗАДАНИЕ 3: FizzBuzz
 *
 * Напишите функцию fizzBuzz(n), которая принимает число n и возвращает массив
 * строк от 1 до n по следующим правилам:
 *   - если число делится на 3 → "Fizz"
 *   - если число делится на 5 → "Buzz"
 *   - если делится на 3 и на 5 → "FizzBuzz"
 *   - иначе → само число в виде строки
 *
 * Пример:
 *   fizzBuzz(5) => ["1", "2", "Fizz", "4", "Buzz"]
 *   fizzBuzz(15) => [..., "FizzBuzz"]
 */

function fizzBuzz(n) {
  
  const res =[];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) res.push ("fizzBuzz");
    else if (i% 3 === 0) res.push("fizz");
    else if (i% 5 === 0) res.push("Buzz");
    else res.push(String(i));
  }
  return res;
}

module.exports = { fizzBuzz };
