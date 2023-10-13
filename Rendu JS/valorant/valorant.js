function Partie() {
  let ScoreAttaquants = 0;
  let ScoreDefenseurs = 0;

  while (ScoreAttaquants < 13 && ScoreDefenseurs < 13) {
    let Attaquants = [
      "OmenATQ",
      "PhoenixATQ",
      "JettATQ",
      "FadeATQ",
      "ChamberATQ",
    ];
    let Defenseurs = [
      "OmenDEF",
      "PhoenixDEF",
      "JettDEF",
      "FadeDEF",
      "ChamberDEF",
    ];

    let numManche = ScoreAttaquants + ScoreDefenseurs + 1;
    console.log("Début de la manche " + numManche + ".");

    let EquipeAléatoire = Math.random();
    if (EquipeAléatoire < 0.5) {
      let AttaquantAléatoire = Math.floor(Math.random() * Attaquants.length);
      let DefenseurAléatoire = Math.floor(Math.random() * Defenseurs.length);

      console.log(
        Attaquants[AttaquantAléatoire] +
          " a tué " +
          Defenseurs[DefenseurAléatoire]
      );

      Defenseurs.splice(DefenseurAléatoire, 1);
    } else {
      let DefenseurAléatoire = Math.floor(Math.random() * Defenseurs.length);
      let AttaquantAléatoire = Math.floor(Math.random() * Attaquants.length);
      console.log(
        Defenseurs[DefenseurAléatoire] +
          " a tué " +
          Attaquants[AttaquantAléatoire]
      );
      Attaquants.splice(AttaquantAléatoire, 1);
    }

    if (Attaquants.length > Defenseurs.length) {
      let SpikePose = Math.random();
      if (SpikePose <= 0.6) {
        console.log("Les attaquants ont posé le spike.");
        while (Attaquants.length != 0 && Defenseurs.length != 0) {
          let EquipeAléatoire = Math.random();
          if (EquipeAléatoire < 0.7) {
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );

            console.log(
              Attaquants[AttaquantAléatoire] +
                " a tué " +
                Defenseurs[DefenseurAléatoire]
            );

            Defenseurs.splice(DefenseurAléatoire, 1);
          } else {
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            console.log(
              Defenseurs[DefenseurAléatoire] +
                " a tué " +
                Attaquants[AttaquantAléatoire]
            );
            Attaquants.splice(AttaquantAléatoire, 1);
          }
        }
      } else {
        console.log("Les attaquants n'ont pas posé le spike.");
        while (Attaquants.length != 0 && Defenseurs.length != 0) {
          let EquipeAléatoire = Math.random();
          if (EquipeAléatoire < 0.5) {
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );

            console.log(
              Attaquants[AttaquantAléatoire] +
                " a tué " +
                Defenseurs[DefenseurAléatoire]
            );

            Defenseurs.splice(DefenseurAléatoire, 1);
          } else {
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            console.log(
              Defenseurs[DefenseurAléatoire] +
                " a tué " +
                Attaquants[AttaquantAléatoire]
            );
            Attaquants.splice(AttaquantAléatoire, 1);
          }
        }
      }
    } else {
      let SpikePose = Math.random();
      if (SpikePose <= 0.4) {
        console.log("Les attaquants ont posé le spike.");
        while (Attaquants.length != 0 && Defenseurs.length != 0) {
          let EquipeAléatoire = Math.random();
          if (EquipeAléatoire < 0.7) {
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );

            console.log(
              Attaquants[AttaquantAléatoire] +
                " a tué " +
                Defenseurs[DefenseurAléatoire]
            );

            Defenseurs.splice(DefenseurAléatoire, 1);
          } else {
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            console.log(
              Defenseurs[DefenseurAléatoire] +
                " a tué " +
                Attaquants[AttaquantAléatoire]
            );
            Attaquants.splice(AttaquantAléatoire, 1);
          }
        }
      } else {
        console.log("Les attaquants n'ont pas posé le spike.");
        while (Attaquants.length != 0 && Defenseurs.length != 0) {
          let EquipeAléatoire = Math.random();
          if (EquipeAléatoire < 0.5) {
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );

            console.log(
              Attaquants[AttaquantAléatoire] +
                " a tué " +
                Defenseurs[DefenseurAléatoire]
            );

            Defenseurs.splice(DefenseurAléatoire, 1);
          } else {
            let DefenseurAléatoire = Math.floor(
              Math.random() * Defenseurs.length
            );
            let AttaquantAléatoire = Math.floor(
              Math.random() * Attaquants.length
            );
            console.log(
              Defenseurs[DefenseurAléatoire] +
                " a tué " +
                Attaquants[AttaquantAléatoire]
            );
            Attaquants.splice(AttaquantAléatoire, 1);
          }
        }
      }
    }
    if (Attaquants.length == 0 && Defenseurs.length != 0) {
      ScoreDefenseurs += 1;
      console.log("Les défenseurs ont gagné la manche " + numManche + ".");
    } else {
      ScoreAttaquants += 1;
      console.log("Les attaquants ont gagné la manche " + numManche + ".");
    }
  }
  console.log(
    "Le score est de " +
      ScoreAttaquants +
      " pour les attaquants et " +
      ScoreDefenseurs +
      " pour les défenseurs."
  );
  if (ScoreAttaquants == 13) {
    console.log("Les attaquants ont gagné la partie.");
  } else if (ScoreDefenseurs == 13) {
    console.log("Les défenseurs ont gagné la partie.");
  }
}

Partie();
