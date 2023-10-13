class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    if (Math.random() > this.luck) {
      return true;
    }
  }

  attackPokemon(Victim) {
    if (this.isLucky()) {
      let damage = this.attack - Victim.defense;
      console.log(
        this.name +
          " attaques et infliges " +
          damage +
          " points de dégats à " +
          Victim.name
      );
      Victim.hp -= damage;
      console.log(
        "Il reste " + Victim.hp + " points de vie à " + Victim.name + "."
      );
    } else {
      console.log(this.name + " n'a pas pu attaquer.");
    }
  }
}

let Groudon = new Pokemon("Groudon", 150, 110, 100, 0.8);
let Rayquaza = new Pokemon("Rayquaza", 150, 90, 105, 0.9);

function Fight(pokemon1, pokemon2) {
  while (Object.values(pokemon1)[3] > 0 && Object.values(pokemon2)[3] > 0) {
    pokemon1.attackPokemon(pokemon2);
    pokemon2.attackPokemon(pokemon1);
  }
  if (Object.values(pokemon1)[3] <= 0) {
    console.log(Object.values(pokemon1)[0] + " est KO.");
    console.log(Object.values(pokemon2)[0] + " a gagné le combat !");
  } else if (Object.values(pokemon2)[3] <= 0) {
    console.log(Object.values(pokemon2)[0] + " est KO.");
    console.log(Object.values(pokemon1)[0] + " a gagné le combat !");
  }
}

Fight(Groudon, Rayquaza);
