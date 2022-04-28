//déclaration variables random pour carte bank et player
let carts_bank = Math.floor(Math.random()*52)+1;
let carts_player = Math.floor(Math.random()*52)+1;
//déclarations variables pour valeur cartes. 
let val_bank = carts_bank%13;
let val_player = carts_player%13;
//déclarations variables affichage des scores
let cpt_total_player = 0;
let cpt_total_bank = 0;

//fonction pour dire que Dame, Valet et Roi = 10
function calcul_carts(val_carts){
    if (val_carts == 0 || val_carts ==11  || val_carts ==12 ){
        val_carts = 10;
    }
    return val_carts;
}
function affichage(){
//affichage carte banque 
    document.getElementById('bank').innerHTML = `<img src='images/${carts_bank}.jpg'>`;
    //calcule score bank après premier tirage
    cpt_total_bank += calcul_carts(val_bank);
    //affichage score bank suite premier tirage
    document.getElementById('cmb_bank').innerHTML = cpt_total_bank;  

//affichage carte joueur 
    document.getElementById('player').innerHTML = `<img src='images/${carts_player}.jpg'>`;
    //calcule score joueur après premier tirage   
    cpt_total_player += calcul_carts(val_player);
    //affichage score joueur suite premier tirage
    document.getElementById('cmb_player').innerHTML = cpt_total_player;
}
//appelle fonction Affichage
affichage();


//Ajoute des cartes à la banque avec le bouton rest tant que la banque < joueur
function rest(){
    while (cpt_total_bank <= cpt_total_player){
    //Variables random pour nouvelles cartes
    carts_bank = Math.floor(Math.random()*52)+1;
    //affichage des cartes 
    document.getElementById('bank').innerHTML += `<img src='images/${carts_bank}.jpg'>`;
    //calcule des points bank
    let cpt_total = carts_bank%13;
    cpt_total_bank += calcul_carts(cpt_total);
    }
    //affichage score bank
    document.getElementById('cmb_bank').innerHTML = cpt_total_bank;
    //affichage si gagner 
    if(cpt_total_bank > 21){
        document.getElementById('display_result').innerHTML ='<h1>Tu remporte la moula mon pote</h1>';
    }
    //affichage black jack bank
    else if (cpt_total_bank == 21){
        document.getElementById('display_result').innerHTML ='<h1>LA BANQUE A FAIT BLACKJACK</h1>';
    }
    //affichage perdu si bank à plus que nous
    else if (cpt_total_bank > cpt_total_player){
        document.getElementById('display_result').innerHTML ='<h1>LOOSER, La bank te l\'a mise</h1>';
    }
    //mais si moins de 21pts
    else if ((cpt_total_bank < 21)){
        document.getElementById('display_result').innerHTML ='<h1>LOOSER, La bank te l\'a mise</h1>';
    }
}

//Ajoute des cartes au joueur avec le bouton cartes 
function ajouter(){
    //variables random pour nouvelles cartes
    carts_player = Math.floor(Math.random()*52)+1;
    //affichage cartes
    document.getElementById('player').innerHTML += `<img src='images/${carts_player}.jpg'>`;
    //calcule des points joueur
    let cpt_total= carts_player%13;
    cpt_total_player += calcul_carts(cpt_total);
    //affichage point joueur
    document.getElementById('cmb_player').innerHTML = cpt_total_player;
    //affichage gagner si Black Jack
    if (cpt_total_player == 21){
        document.getElementById('display_result').innerHTML ='<h1>BLACK JACK POTO</h1>';
    }
    //affichage perdu 
    else if (cpt_total_player > 21){
        document.getElementById('display_result').innerHTML ='<h1>LOOSER, La bank te l\'a mise</h1>';
    }
}




