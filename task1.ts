// Написать функцию, которая будет высчитывать среднюю сумму чисел значений объекта
type Salaries = Record<string, number | string | null>;
const salaries: Salaries = {
  alexander: 500,
  elena: 341.3,
  karina: "465",
  anastasia: 480.5,
  diana: 390,
  julia: null,
} as const satisfies Salaries;
function calculateAverageSalary(salaries: Salaries) {
  let sum = 0;
  for (const key in salaries) {
    const value = Number(salaries[key]);
    if (!isNaN(value)) {
      sum += value;
    } else {
      console.error(`Value for ${key} is not a number: ${salaries[key]}`);
      return;
    }
  }
  return sum / Object.keys(salaries).length;
}
console.log(calculateAverageSalary(salaries));
