let Noms = [
  "Gabriel",
  "Raphaël",
  "Arthur",
  "Louis",
  "Jules",
  "Emma",
  "Mia",
  "Jade",
  "Alice",
  "Rose",
];

let morts = [];

let Caractéristiques = {
  Nerd: [0.4, 0.3, 0.3],
  Sportif: [0.2, 0.5, 0.3],
  Blonde: [0.4, 0.2, 0.4],
  Scout: [0.3, 0.4, 0.4],
  Chasseur: [0.1, 0.4, 0.5],
};

function Aléatoire(x) {
  a = Math.floor(Math.random() * x);
}

function AléatoireAction(x, y, z) {
  let random = 0;
  let mort = Math.random() * x;
  console.log(mort);
  let attaque = Math.random() * y;
  console.log(attaque);
  let mortEtAttaque = Math.random() * z;
  console.log(mortEtAttaque);
  if (mort > attaque && mort > mortEtAttaque) {
    console.log("meurt");
    random = 0;
  } else if (attaque > mort && attaque > mortEtAttaque) {
    console.log("attaque");
    random = 1;
  } else {
    console.log("attaque mais meurt");
    random = 2;
  }
}

function Tueur() {
  let Jason = 100;

  let Personnages = [];
  let b = 0;

  while (b != 5) {
    b += 1;
    Aléatoire(10);
    Personnages.push(Noms[a]);
  }
  console.log(Personnages);

  let CaractPersos = [];

  b = 0;
  let c = Object.keys(Caractéristiques).length;

  while (b < Object.keys(Caractéristiques).length) {
    b += 1;
    c -= 1;
    let Caracts = Object.keys(Caractéristiques);

    Aléatoire(c);

    let caractéristiqueAléatoire = Caracts[a];
    console.log(caractéristiqueAléatoire);

    CaractPersos.push(caractéristiqueAléatoire);
    console.log(Caractéristiques);

    console.log(CaractPersos);
  }

  while (Jason > 0 && Personnages[0] != null) {
    console.log("Il reste " + Jason + " points de vies à Jason.");
    Aléatoire(3);
    let TourSurvivant = Personnages[0];
    console.log(String(TourSurvivant));
    AléatoireAction(
      Caractéristiques["Nerd"][0],
      Caractéristiques["Nerd"][1],
      Caractéristiques["Nerd"][2]
    );

    if (random == 0) {
      console.log("Jason a tué " + Personnages[0] + ".");
      morts.push(" " + Personnages.shift(0, 1));
    } else if (random == 1) {
      Jason -= 15;
      console.log(
        Personnages[0] +
          " a infligé 15 points de dégats a Jason mais s'est fait tué."
      );
      morts.push(" " + Personnages.shift(0, 1));
    } else {
      Jason -= 10;
      console.log(
        Personnages[0] + " a esquivé et a infligé 10 points de dégats à Jason."
      );
    }
  }
  if (Personnages[0] == null && Jason >= 0) {
    console.log("Jason a tué tous les survivants.");
  } else if (Jason <= 0 && Personnages[0] != null) {
    console.log("Les survivants ont gagné");
    console.log("Mais RIP à" + morts + ".");
  } else if (Jason <= 0 && Personnages[0] == null) {
    console.log("Tout le monde est mort");
  }
}

Tueur();
