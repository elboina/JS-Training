const paroles = [
  "Frère Jacques",
  "Dormez-vous",
  "Sonnez les matines",
  "Ding ding dong"
];

export const instructions = [];

// TOFIX: imprimer la chanson correctement
for (let parole of paroles) {
  instructions.push(function printNextLine() {
    return `${parole}, ${parole}`;
  });
}

// code de test, à essayer en console pour voir le problème
/*instructions.forEach(function (printNextLine) {
  console.log(printNextLine());
});*/