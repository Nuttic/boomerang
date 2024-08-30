// // Враг.

// class Enemy {
//   constructor({position}) {
//     this.generateSkin();
//     this.position = position;
//   }

//   generateSkin() {
//     const skins = ['👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
//     this.skin = skins[Math.floor(Math.random() * skins.length)];
//   }

//   moveLeft() {
//     // Идём влево.
//     this.position -= 1;
//   }

//   die() {
//     this.position = '?';
//     this.skin = '💩';
//     console.log('Enemy is dead!');
//   }
// }

// module.exports = Enemy;


const Boomerang = require("./Boomerang");

class Enemy {
  constructor({ position = 10 } = {}) {
    this.generateSkin();
    this.position = position; // Начальная позиция врага
  }

  generateSkin() {
    const skins = [
      "👾",
      "💀",
      "👹",
      "👻",
      "👽",
      "👿",
      "💩",
      "🤡",
      "🤺",
      "🧛",
      "🧟",
      "🎃",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  drawBoard(board) {
    // Очистка консоли
    console.clear();
    // Отрисовка доски с врагом
    console.log(board);
  }

  async moveLeft(board) {
    const delay = 300; // Задержка между движениями
    const boomerang = new Boomerang(); // Инициализация Boomerang

    while (this.position > 0) {
      const updatedBoard = board.split("");
      updatedBoard[this.position] = " ";
      this.position -= 1;

      // Проверка на совпадение позиции врага с позицией Boomerang
      if (this.position === boomerang.position) {
        await this.die();
        return;
      }

      updatedBoard[this.position] = this.skin;
      // Преобразуем массив обратно в строку
      const newBoard = updatedBoard.join("");
      // Отрисовываем доску
      this.drawBoard(newBoard);

      // Имитируем задержку
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  async die() {
    // Имитируем задержку перед смертью врага
    await new Promise((resolve) => setTimeout(resolve, 300));
    this.position = -1; // или другой способ обозначения "мертв"
    console.log("BASTED");
  }
}

(async () => {
  const board = "          "; // Доска из 10 пробелов
  const enemy = new Enemy();
  console.log("Initial board:");
  enemy.drawBoard(board);
  await enemy.moveLeft(board);
});

module.exports = Enemy;