// Наш герой.

const Boomerang = require("./Boomerang");

class Hero {
  constructor({ position }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = new Boomerang({heroPosition: this.position});
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack({enemyPosition, game}) {
    // Атакуем
    this.boomerang.fly({enemyPosition: enemyPosition, game: game});
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
