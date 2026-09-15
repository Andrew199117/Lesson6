// Написать метод fill, который заполнит ваше имя и возраст для объекта user
// * починить код, чтобы он работал - корректно выводил имя и возраст, не удаляю переменную fill

const counter = {
  user: { name: "", age: 0 },

  fill() {
    this.user.name = "Андрей";
    this.user.age = 35;
  },

  log() {
    console.log(JSON.stringify(this.user));
  },
};

const fill = counter.fill.bind(counter);
fill();

counter.log();
