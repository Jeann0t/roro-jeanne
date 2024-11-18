document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
//Compteur
// Date de départ (25 novembre 2022)
var dateDebut = new Date(2022, 10, 25);  // Mois est de 0 à 11, donc 10 représente novembre

// Fonction pour calculer la différence entre la date actuelle et la date de départ
function calculerTempsEcoule() {
var dateActuelle = new Date();  // Date actuelle

// Calculer la différence en millisecondes
var diff = dateActuelle - dateDebut;

// Convertir cette différence en années, mois et jours
var diffAnnee = dateActuelle.getFullYear() - dateDebut.getFullYear();
var diffMois = dateActuelle.getMonth() - dateDebut.getMonth();
var diffJour = dateActuelle.getDate() - dateDebut.getDate();

// Si on a passé un mois sans avoir atteint le même jour du mois, réduire le nombre d'années
if (diffMois <= 0) {
    diffAnnee--;
    diffMois += 12;  // Ajouter 12 mois (puisqu'on a traversé une année)
}

// Si on a passé un jour sans avoir atteint le même jour, réduire le nombre de mois
if (diffJour < 0) {
    diffMois--;
    var lastMonth = new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), 0);  // Dernier jour du mois précédent
    diffJour += lastMonth.getDate();  // Ajouter les jours du mois précédent
}

// Affichage des résultats dans le DOM
document.getElementById("annees").textContent = diffAnnee;
document.getElementById("mois").textContent = diffMois;
document.getElementById("jours").textContent = diffJour;
}

// Mettre à jour le compteur toutes les secondes
setInterval(calculerTempsEcoule, 1000);

//Diaporama
let slideIndex = 0;
  let slides = document.querySelectorAll(".slides img");

  // Fonction pour afficher la diapositive suivante
  function afficherDiapo(n) {
    slides.forEach((slide) => slide.classList.remove("fade"));
    slides.forEach((slide) => (slide.style.display = "none"));

    slideIndex = (n + slides.length) % slides.length; // Gérer le débordement
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("fade");
  }

  // Initialiser le diaporama
  afficherDiapo(slideIndex);

  // Naviguer entre les images
  document.querySelector(".prev").addEventListener("click", () => {
    afficherDiapo(slideIndex - 1);
  });

  document.querySelector(".next").addEventListener("click", () => {
    afficherDiapo(slideIndex + 1);
  });
