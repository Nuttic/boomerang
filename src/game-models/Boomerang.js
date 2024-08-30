// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!


class Boomerang {

  constructor({heroPosition}) {
    this.skin = '🌀';
    this.position = heroPosition ;
  }

  fly({enemyPosition, game}) {
    setInterval(() => {
      this.position += 1;
      if(this.position === enemyPosition) {
        game.enemy.skin = "💩";
        setInterval(() => {
          this.position -= 1;
          if(this.position === this.heroPosition) {
            process.exit()
          }
        }, 100)
      }
    },100)
  }

  moveLeft() {
    this.position -= 1;
  }

  async moveRight() {
    // Идём вправо.
    this.position += 1
  }
}

module.exports = Boomerang;
