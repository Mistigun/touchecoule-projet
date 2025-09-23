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

function afficherGrille(grille: string[][], bateauCache: boolean): void {
  let resultat = "";
  for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille; j++) {
      if (bateauCache && grille[i][j] === "B") resultat += "~ ";
      else resultat += grille[i][j] + " ";
    }
    resultat += "\n";
  }
  console.log(resultat);
}

function bateau(grille: string[][], x: number, y: number): void {
  grille[x][y] = "B";
}
function tirer(grilleBot: string[][]): void {
  let x: number, y: number;

  while (true) {
    const xs = prompt(`Entre X (0-${taille - 1})`) || "";
    const ys = prompt(`Entre Y (0-${taille - 1})`) || "";

    x = parseInt(xs);
    y = parseInt(ys);

    if (!isNaN(x) && !isNaN(y) && x >= 0 && x < taille && y >= 0 && y < taille) break;

    alert("Coordonnées invalides !");
  }

  if (grilleBot[x][y] === "B") {
    grilleBot[x][y] = "X";
    alert(`Touché en (${x},${y}) !`);
  } else if (grilleBot[x][y] === "~") {
    grilleBot[x][y] = "O";
    alert(`À l’eau en (${x},${y})...`);
  } else {
    alert(`Déjà tiré en (${x},${y}) !`);
  }

  afficherGrille(grilleBot, true);
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
  const bot = TABLEAU();

 
  bateau(bot, 1, 1);
  bateau(bot, 3, 4);

  alert("Le jeu commence");
  afficherGrille(bot, true);

  while (true) {
    tirer(bot);

    if (couler(bot)) {
      alert("Tous les bateaux sont coulés !");
      break; 
    }
  }
    
}
game();