document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

// Date de départ (25 novembre 2022)
var dateDebut = new Date(2022, 10, 25); // Mois 10 = Novembre (0-indexé)

// Fonction pour calculer la différence entre la date actuelle et la date de départ
function calculerTempsEcoule() {
    var dateActuelle = new Date(); // Date actuelle

    // Calculer les différences initiales
    var diffAnnee = dateActuelle.getFullYear() - dateDebut.getFullYear();
    var diffMois = dateActuelle.getMonth() - dateDebut.getMonth();
    var diffJour = dateActuelle.getDate() - dateDebut.getDate();

    // Ajuster si le mois actuel est avant le mois de départ
    if (diffMois < 0) {
        diffAnnee--;
        diffMois += 12; // Corrige les mois en ajoutant 12
    }

    // Ajuster si le jour actuel est avant le jour de départ
    if (diffJour < 0) {
        diffMois--;
        var dernierJourMoisPrecedent = new Date(
            dateActuelle.getFullYear(),
            dateActuelle.getMonth(),
            0 // Jour 0 = dernier jour du mois précédent
        ).getDate();
        diffJour += dernierJourMoisPrecedent; // Ajoute les jours restants du mois précédent
    }

    // Affichage des résultats dans le DOM
    document.getElementById("annees").textContent = diffAnnee;
    document.getElementById("mois").textContent = diffMois;
    document.getElementById("jours").textContent = diffJour;
}

// Mettre à jour le compteur toutes les secondes
setInterval(calculerTempsEcoule, 1000);

//Diapo
document.addEventListener("DOMContentLoaded", function () {
// Tableau des descriptions
    const descriptions = [
      "29/10/2022: Soirée Halloween",
      "03/12/2022: Week-end à Lyon",
      "19/12/2022: Soirée de Noël",
      "26/03/2023: Soirée Masquerade",
      "27/05/2023: FIMU",
      "04/06/2023: Soirée fille",
      "17/09/2023: Montée du Salbert",
      "11/10/2023: Soirée caveau des anges (je t'ai laissé à l'entrée)",
      "17/10/2023: WEI",
      "13/11/2023: Soirée Bad Habits",
      "18/11/2023: Gala",
      "27/11/2023: Soirée Mexique",
      "22/01/2024: Ski'UT",
      "08/04/2024: À distance",
      "10/07/2024: Retrouvaille aux Sables",
      "12/07/2024: Séance photos",
      "16/07/2024: Mont St Michel",
      "24/07/2024: Volley dans le sud",
      "25/07/2024: Visite chez mamie Castan",
      "27/07/2024: Soirée chez les Castan"
    ];

    // Variables pour gérer les diapos
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides img");
    const descriptionDiv = document.querySelector(".description");

    function afficherDiapo(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slideIndex = (index + slides.length) % slides.length;
        slides[slideIndex].classList.add("active");
        descriptionDiv.textContent = descriptions[slideIndex];
    }

    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.addEventListener("click", () => {
        afficherDiapo(slideIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        afficherDiapo(slideIndex + 1);
    });
    
});
