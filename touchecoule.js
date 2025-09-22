const taille = 5;

function TABLEAU(): string[][] {
  const grille: string[][] = [];
  for (let i = 0; i < taille; i++) {
    grille[i] = [];
    for (let j = 0; j < taille; j++) {
      grille[i][j] = "~";
    }
  }
  return grille;
}

function afficherGrille(grille: string[][], hideShips: boolean): void {
  let resultat = "";
  for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille; j++) {
      if (hideShips && grille[i][j] === "B") resultat += "~ ";
      else resultat += grille[i][j] + " ";
    }
    resultat += "\n";
  }
  console.log(resultat);
}

function bateau(grille: string[][], x: number, y: number): void {
  grille[x][y] = "B";
}