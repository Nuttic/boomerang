// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
// const keypress = require("keypress");
const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const keypress = require('keypress');
// const Boomerang = require('./game-models/Boomerang');
const View = require("./View");
const runInteractiveConsole = require("./keyboard");
// const runInteractiveConsole = require("./keyboard");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0 }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 35 });
    this.view = new View({ game: this });
    this.track = [];
    this.regenerateTrack();
  }

  // Управление.
  // Настроим соответствия нажатий на клавиши и действий в игре.

  // w: () => console.log('w'),
  // e: () => console.log('e'),
  // r: () => console.log('r'),
  // t: () => console.log('t'),
  // y: () => console.log('y'),

  // Какая-то функция.


  // Давай попробуем запустить этот скрипт!

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных

    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.enemy.position] = this.enemy.skin;
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    runInteractiveConsole(this);
    setInterval(() => {

      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    });
  }
}

module.exports = Game;
