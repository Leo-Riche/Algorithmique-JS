const Musiques = [
  "Anissa Wejdene",
  "Michou Dans le Club",
  "Shakira Wakawaka",
  "Michel Legends Never Die",
  "Rilès Should I",
];

function Taxi() {
  let FeuxRouges = 30;
  let Léo = 10;

  function Radio(x) {
    a = Math.floor(Math.random() * x);
  }

  while (FeuxRouges != 0 && Léo != 0) {
    Radio(Musiques.length);
    console.log("Radio : " + Musiques[a] + ".");

    if (a === 0) {
      Léo -= 1;
      console.log("Tu perds 1 vie, il t'en reste " + Léo + ".");
    } else {
      FeuxRouges -= 1;
      console.log(
        "Il te reste " + FeuxRouges + " feux rouges avant d'arriver !"
      );
    }
  }
  if (Léo === 0) {
    console.log("Explosion");
  }
  if (FeuxRouges === 0) {
    let Changements = 10 - Léo;
    console.log("Tu es bien arrivé !");
    console.log("Il t'a fallu " + Changements + " changements de taxi.");
  }
}

Taxi();
