
/*window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

// Calculez le déplacement ici ...
console.log(window.scrollY);

document.getElementById('progress_bar').value = window.scrollY; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});

function myScroll() { // Définition de la fonction de scroll
    var progress = document.getElementById('progress_bar').value; // Valeur de la barre de progression
    
    // Calculez ici la valeur de déplacement à efectuer lors du scroll
    
    window.scroll(0, value) // Déplacement de la page de 0 px latéralement et 'value' px horizontalement
}*/

window.addEventListener("scroll", function() {
let deplacement  = (window.scrollY*100)/(document.body.offsetHeight-window.innerHeight);

    if (document.querySelector('#progress_bar').MaterialSlider){
        document.querySelector('#progress_bar').MaterialSlider.change(deplacement);
    }
});
