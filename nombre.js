var max = 100, solution, rep, reponses ="";

function initjeu(){

	var oldtxt = document.getElementById("tete").querySelector("p");

	var newtxt = document.createElement("p");
	var intxt = document.createTextNode("Trouves le nombre entre 0 et "+ max);

	newtxt.appendChild(intxt);

	document.getElementById("tete").replaceChild(newtxt,oldtxt);
}

function newligne(txt) {
	reponses = txt + ".   ";

	var lignRep = document.createElement("p");
	var blocRep = document.createTextNode(reponses);

	lignRep.appendChild(blocRep);

	document.getElementById("repLst").appendChild(lignRep);
}

function play(reponse) {

	var texte;

	if (reponse > max || reponse < 0) {
		texte = "Impossible "+reponse+" est hors des limites";
		alert("tu ne m'as pas l'air bien futé");
	} else {

		if (reponse > solution){
			texte = "Non "+ reponse + " est trop grand";
		}
		if (reponse < solution){
			texte = "Non " + reponse +"  est trop petit";
		}
		if (reponse == solution){  			// exo une autre partie //
		  var oui = confirm("Gagné, une autre partie ?");
			 	if (oui){				// fin exo //
			max += 100;
			texte = "Nouvelle partie max = "+max;
			solution = Math.floor(Math.random() * max);			// suite code vider liste exo //
			for (var i = 0; i < compteur ; i ++);
				{suppLigne()};
			compteur = 0;				// fin //
			initjeu();
		} 				// exo 1 nouvelle partie suite du code //
		else {
			 window.location.reload();
	}
		 }				// fin code nouvelle partie //
	}
	newligne(texte);
}
		// effacer le div 'repList' exercice //
function suppLigne() {
	var para = document.getElementById("repLst");
	var element = document.getElementById("repLst").querySelector("p");

	var poubelle = para.removeChild(element);
}

var compteur=0;

		// fin code exercice div //

function newTry() {

	if (solution == undefined) {
		solution = Math.floor(Math.random()* max);
		}

		rep = undefined;

		while(typeof(rep) != "number" || isNaN(rep)){
			rep = parseInt(prompt("Quelle est ta proposition ?","saisir un nombre"));
		}
		play(rep);
}

initjeu();


// modifications à apporter : //
// -demander à l'utilisateur s'il veut relancer une partie, et sinon revenir à la page d'accueil //
// -effacer le div 'repList' quand une nouvelle partie commence (reste a faire) //
