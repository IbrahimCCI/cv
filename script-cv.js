
window.addEventListener("scroll", function() { //ajoute une fonction efectuée lorsque l'utilisateur scroll sur la page

window.scrollY; // Valeur du scroll en pixel
document.body.offsetHeight;// Hauteur totale de la page en pixel
window.innerHeight;// Hauteur de l'écran en pixel

		 if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) 
		 
		 
		 {
             document.getElementById("myImg").className = "slideUp";
        }
// Calculez le déplacement ici ...

document.getElementById('progress_bar').value = deplacement; // Modifie la valeur de la barre de progression pour qu'elle corresponde au déplacement du scroll
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("myImg").className = "slideUp";
  }
}
