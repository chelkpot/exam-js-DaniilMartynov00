/**
 * ЗАДАНИЕ 5: Переворот строки
 *
 * Напишите функцию reverseString(str), которая принимает строку
 * и возвращает её в обратном порядке символов.
 * Нельзя использовать .reverse() напрямую на строке.
 *
 * Пример:
 *   reverseString("hello")  => "olleh"
 *   reverseString("JavaScript") => "tpircSavaJ"
 *   reverseString("")        => ""
 */

function reverseString(str) {
  
  let res = "";
  for (let i = str.length -1; i >= 0; i--) res += str[i];
  return res;
}

module.exports = { reverseString };
