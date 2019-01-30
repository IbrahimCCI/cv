
window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...

document.getElementById('progress_bar').value = window.scrollY; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});
