const divResultat = document.querySelector("#resultat");

// variable qui permet de savoir ou l'on se trouve dans le jeu(trouver pair ou non)

var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var tabResult = [
    [1,4,3,4],
    [1,2,3,2],
    [7,8,6,5],
    [8,7,5,5]
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
// onclick veri fonction qui permet de verifier si  les images correspondent(i ligne ;j colonne concatene avec ++)
// \ permet de mettre une chaine de caracter  et desactve le guillemet pour 1-2 que l' ordi comprend pas
//function verif recupere element clique
//var ligne recupere element()  et var colonne idem + la fonction  bouton.substr récupere un élement vers un autre
// ! bouton clique mais n'affiche rien dans console.log? et image non plus?
//création tablresult qui contient valeur correspondante au differente image



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
function getImage(valeur){
    var imgTxt = "image/";
    switch(valeur){
        case 1 : imgTxt += "elephant.png";
        break;
        case 2 : imgTxt += "giraffe.png";
        break;
        case 3 : imgTxt += "hippo.png";
        break
        case 4 : imgTxt += "monkey.png";
        break;
        case 5: imgTxt += "panda.png";
        break
        case 6 : imgTxt += "parrot.png";
        break;
        case 7: imgTxt += "penguin.png";
        break;
        case 8: imgTxt += "pig.png";
        break;
        default : console.log("cas non pris en compte")
    }
    return imgTxt;
}
function verif(bouton){   
    var ligne = bouton.substr(0,1);
    var colonne = bouton.substr(2,1);
    //  console.log( ligne); 
    //  console.log(colonne);
    tabJeu[ligne][colonne] = tabResult [ligne][colonne];
    afficherTableau(); 

}


