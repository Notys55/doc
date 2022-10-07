//nav
var navName = ['Menu', 'Produit', 'Contact'];

var navLink = ['menu.html', 'produit.html', 'contact.html'];

var navUl = document.querySelector(".list-navigation");

function ajouterLienNav(lien, nom){

	if(navName.length == navLink.length){
  	for(let index = 0; index < navName.length; index++){
    let elementLi = document.createElement('li')
    let elementLink = document.createElement('a');
    elementLink.setAttribute('href', lien[index]);
    elementLink.innerHTML = nom[index];
    elementLi.appendChild(elementLink);
    navUl.appendChild(elementLi);
    }
  }
  else
  {
  	console.log("Les deux tableaux n'ont pas la même taille.")
  }

}


ajouterLienNav(navLink, navName);

function generateurDeP(elementParent, contenus, nbrdefois){
    for(let index = 0; index < nbrdefois; index++){
        let newElement = document.createElement('p');
        newElement.innerHTML = contenus;
        let getParent = document.querySelector(elementParent);
        getParent.appendChild(newElement);
    }
}
generateurDeP('.div-article', 'Lorem cupidatat officia dolor excepteur occaecat sint excepteur est labore minim.', 7 );
generateurDeP('.div-second-article', 'Accusantium necessitatibus nihil est ad pariatur officiis corporis possimus!.', 7);