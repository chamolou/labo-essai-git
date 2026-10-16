// Exercice 7 — Préparer deux étiquettes
// Résultat attendu : les étiquettes de Cahier et de Classeur apparaissent
// entre « Préparation des étiquettes » et « Fin de la préparation ».
// Chaque étiquette indique l’article et la destination Namur.
// Avec destinationEtiquettes = "Mons", les deux destinations changent.

let destinationEtiquettes = "Namur";
let premierArticle = "Cahier";
let secondArticle = "Classeur";
let separateurEtiquettes = premierArticle +  secondArticle;


function afficherEtiquette(article) {
  console.log("Article : " + article);
  console.log("Destination : " + destinationEtiquettes);
}


console.log("Préparation des étiquettes");
console.log(separateurEtiquettes);
afficherEtiquette(premierArticle)
afficherEtiquette(secondArticle)
console.log("Fin de la préparation");
console.log(destinationEtiquettes);
