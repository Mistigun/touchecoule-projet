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

function tirer(enemyGrid: string[][]): void {
  let x: number, y: number;

  while (true) {
    const xs = prompt(`Entre X (0-${taille - 1})`) || "";
    const ys = prompt(`Entre Y (0-${taille - 1})`) || "";

    x = parseInt(xs);
    y = parseInt(ys);

    if (!isNaN(x) && !isNaN(y) && x >= 0 && x < taille && y >= 0 && y < taille) break;

    alert("Coordonnées invalides !");
  }

  if (enemyGrid[x][y] === "B") {
    enemyGrid[x][y] = "X";
    alert(`Touché en (${x},${y}) !`);
  } else if (enemyGrid[x][y] === "~") {
    enemyGrid[x][y] = "O";
    alert(`À l’eau en (${x},${y})...`);
  } else {
    alert(`Déjà tiré en (${x},${y}) !`);
  }

  afficherGrille(enemyGrid, true);
}

function couler(grille: string[][]): boolean {
  for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille; j++) {
      if (grille[i][j] === "B") return false;
    }
  }
  return true;
}

function game(): void {
  const enemy = TABLEAU();

 
  bateau(enemy, 1, 1);
  bateau(enemy, 3, 4);

  alert("Le jeu commence");
  afficherGrille(enemy, true);

  while (true) {
    tirer(enemy);

    if (couler(enemy)) {
      alert("Tous les bateaux sont coulés !");
      break; 
    }
  }
}
game();