// Написать функцию, которая поверхностно сравнивает два объекта
// * В объекте могут быть функции

interface User {
  name: string;
  age: number | (() => number);
}

const user1: User = {
  name: "Vlad",
  age: 23,
};

const user2: User = {
  name: "Vlad",
  age: 23,
};

const user3: User = {
  name: "Vlad",
  age: () => 23,
};

const user4: User = {
  name: "Vlad",
  age: () => 23,
};
function compareObjects(obj1: User, obj2: User) {
  for (const key in obj1) {
    console.log(obj1[key as keyof User].toString());
    if (obj1[key as keyof User].toString !== obj2[key as keyof User].toString) {
      return false;
    }
  }
  return true;
}
console.log(compareObjects(user3, user4));
console.log(compareObjects(user1, user2));
