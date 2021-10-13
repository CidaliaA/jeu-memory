const divResultat = document.querySelector("#resultat");

// variable qui permet de savoir ou l'on se trouve dans le jeu(trouver pair ou non)

var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

// premiere fonction:
// affichage jeu; acces tableau (comprenant des éléments) sans passer par fonction()
// Dans la boucle for(pour) qui commence à 0 et se termine a tableJeu.length( on a parcouru)
//  += <"div"> est une ligne qui est multiplié par quatre par la bouble for 
// txt += button ligne de boutton qui dest multiplié par quatre avec la boucle for
//i++

afficherTableau();

function afficherTableau(){
    var txt ="";

    for(var i=0; i < tabJeu.length ; i++){
        txt += "<div>";
        for(var j=0; j < tabJeu[i].length ; j++){
            txt +="<button class='btn btn-primary m-2' style='width:100px;height:100px'>Afficher</button>";
        }
        txt += "</div>";

    }

    divResultat.innerHTML =txt;
}


