/**
 * ЗАДАНИЕ 7: Сглаживание вложенного массива (один уровень)
 *
 * Напишите функцию flattenOnce(arr), которая принимает массив,
 * который может содержать вложенные массивы (только один уровень вложенности),
 * и возвращает "плоский" массив всех элементов.
 * Нельзя использовать .flat().
 *
 * Пример:
 *   flattenOnce([1, [2, 3], [4, 5], 6]) => [1, 2, 3, 4, 5, 6]
 *   flattenOnce([[1, 2], [3, 4]])        => [1, 2, 3, 4]
 *   flattenOnce([1, 2, 3])              => [1, 2, 3]
 */

function flattenOnce(arr) {
  
  const res = []
  for (let el of arr) {
    if(Array.isArray(el)) for (let x of el) res.push(x);
    else res.push(el);
  }
  return res;
}

module.exports = { flattenOnce };
