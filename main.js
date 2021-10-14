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
//i++rajoute 1 a chaque fois
// la balise style permet de rajouter du css au choix ( mauvaise pratique)
// m-2 est la class bootstrap margin de 2 (espace)( mauvaise pratique)
// premiere étape qui genère boutton grille mais ne fonctionne pas
// test valeur qu'on est en train de parcourir dans le tableau jeu cad si 
// deuxieme étape:affiche image correspondante
// onclick fonction qui permet de verifier si  les images correspondent(i ligne ;j colonne concatene avec ++)
// \ permet de mettre une chaine de caracter pour 1-2 que l' ordi comprend pas

afficherTableau();

function afficherTableau(){
    var txt ="";

    for(var i=0; i < tabJeu.length; i++){
        txt += "<div>";
        for(var j=0; j < tabJeu[i].length ; j++){
            if(tabJeu[i][j] === 0){
            txt +="<button class='btn btn-primary m-2' style='width:100px;height:100px' onClick='verif'(\""+i+"-"+j+"\")'>Afficher</button>";
            }
            else {
                txt += "<img src= '"+getImage(tabJeu[i][j])+"'style='width:100px;height:100px' class= 'm-2'>";
            }
        }
        txt += "</div>";
    }
    divResultat.innerHTML =txt;
}


