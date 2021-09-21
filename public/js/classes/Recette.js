/**
 * Class to display recipes on the index.
 */

import Utils from "../utils/Utils.js";

export default class Recipe {

   /**
    * 
    */
   constructor(recipes) {
      this.recipes = recipes;
      //creer un array à partir de la liste des ingrédients des recettes filtrées
      this.ingredients = [];
      //creer un array à partir de la liste des appareils des recettes filtrées
      this.appareils = [];
      //creer un array à partir de la liste des ustensiles des recettes filtrées
      this.ustensilesTries =[];
      this.displayRecipes(recipes);
      this.enterMot();
      this.doAttachClickToFiltre();

   }

   //afficher les 50 recettes.
   displayRecipes(recipes) {
      let elt = document.getElementById("recipes_container");
      elt.innerHTML = "";
      //vider les elements ingredients+ustensiles+appareils.
      document.querySelector(".bloc-search-resultat--ingredient").innerHTML = "";
      document.querySelector(".bloc-search-resultat--appareil").innerHTML = "";
      document.querySelector(".bloc-search-resultat--ustensiles").innerHTML = "";
      //vider array crée à partir de la liste des ingrédients des recettes filtrées
      this.ingredients = [];
      this.appareils = [];
      this.ustensilesTries =[];

      recipes.forEach(currentRecipe => {
         let article = document.createElement("article");
         article.className = "recipe-card";
         article.innerHTML = this.getTemplateRecipe(currentRecipe);
         elt.appendChild(article);
      })

   }

   /**
    * Créer la structure HTML du bloc recette
    * 
    * @param {array} recipes :data des 50 recettes
    * @returns {HTMLElement} :structure bloc recette
    */
   getTemplateRecipe(recipes) {
      //Element vide en haut du bloc recette
      let template = `<div class="recipe-card_header"></div> `
      //Element ou sera affiché: titre + timer+temps
      template += `
            <div class="title-time-recipe">
               <p class="nom">${recipes.nom} </p>
               <p class="temps"><i class="far fa-clock"></i> ${recipes.temps} min </p> 
            </div>
            <div class="recipe-card_content">
            <div>`
      //Element ou sera affiché les ingrédients
      recipes.ingredients.forEach(currentIngredient => {
         //si l'"unité" n'existe pas dans le data ==rien à afficher
         //let uniteValue = currentIngredient.unite ? currentIngredient.unite : "" ;
         //cela veut dire condition ? val1 : val2 Si condition vaut true,
         // l'opérateur vaudra val1. Sinon il vaudra val2
         let uniteValue = "";
         if (currentIngredient.unite) {
            uniteValue = currentIngredient.unite;
         }
         let quantiteValue = "";
         let separateurPoint = "";
         if (currentIngredient.quantite) {
            quantiteValue = currentIngredient.quantite;
            separateurPoint = ":";
         }
         template += `
            <div class="ingredient">
               ${currentIngredient.ingredient}
               ${separateurPoint}
               ${quantiteValue} 
               ${uniteValue}
            </div>
            `
         //Afficher les ingredients dans le bloc de recherche "Ingredients".
         this.doDisplayIngredient(currentIngredient.ingredient);
      })
      //Afficher les appareils dans le le bloc de recherche "appareil".
      this.doDisplayAppareil(recipes.appareil);
      //Afficher les appareils dans le le bloc de recherche "ustensiles".
      this.doDisplayUstensiles(recipes.ustensiles);
      //Element ou sera affichée la description de la recette.
      template += `</div>
            <p class="description textEllipsis">${recipes.description}</p></div>`;
      return template;

   }

   /**
    * Récupérer le mot saisi
    */
   enterMot() {
      let elt = document.getElementById("barreRecherche");

      elt.value = "";
      elt.addEventListener('input', e => {
         //Controler le mot saisi
         this.filterRecipes(elt.value);
      })
   }
   /**
    * 
    * @param {*} ingredients 
    * @param {*} tag 
    * @returns ?????????????????????????
    */
   isIngredientsHaveTag(ingredients, tag) {
      let resultat = ingredients.some(currentIngredient => Utils.toLawer(currentIngredient.ingredient).includes(tag));
      return resultat;
   }

   /**
    * Afficher les recettes filtrées selon tag saisi dans la barre de recherche principale
    * @param {*} tag 
    */
   filterRecipes(tag) {
      let recipesTag = [];
      if (tag && tag.length >= 3) {
         tag = Utils.toLawer(tag);

         recipesTag = this.recipes.filter(currentRecipe => {
            // filtre sur le nom
            let nom = Utils.toLawer(currentRecipe.nom);
            let description = Utils.toLawer(currentRecipe.description);
            if (nom.includes(tag) || description.includes(tag) || this.isIngredientsHaveTag(currentRecipe.ingredients, tag)) {
               return true;
            } else {
               return false;
            }
         })
      } else {
         //Afficher toutes les recettes.
         recipesTag = this.recipes;
      }
      //Afficher les recettes triées par tag.
      this.displayRecipes(recipesTag);
   }


   /**
    * Afficher les ingrédients dans les blocs de la recherche avancée.
    * @param {*} ingredient liste des ingredients resultat de la recherche barre principale.
    */
   doDisplayIngredient(ingredient) {
      //condition pour supprimer les dupliqués.
      //Capitaliser la premiere lettre des ingrédients
      ingredient = Utils.capitalizeFirstLetter(ingredient);
      //si l'ingredient se trouve dans l'array des ingredient =>rien à faire
      if (this.ingredients.includes(ingredient)) {
         return true
      } else {
         //si l'ingredient ne se trouve pas dans l'array des ingredient=>ajout de l'ingrédient.
         this.ingredients.push(ingredient);
         let elt = document.querySelector(".bloc-search-resultat--ingredient");
         let li = Utils.creatEltHtml("li", "search-ingredient");
         li.innerHTML = ingredient;
         elt.appendChild(li);
         //Attacher "click" à l'ingrédient.
         li.addEventListener("click", event => {
            //Affiche l' ingrédient cliqué sous forme de tag. 
            this.doAddFiltreTags(li, 'ingredient');
         });
      }
   }

   /**
    * Afficher les appareils(resultat recherche barre principale) dans les blocs de recherche avancée.
    * @param {*} appareil 
    * @returns 
    */
   doDisplayAppareil(appareil) {
      
      if (this.appareils.includes(appareil)) {
         return true
      } else {
         this.appareils.push(appareil);

         let elt = document.querySelector(".bloc-search-resultat--appareil");
         let li = Utils.creatEltHtml("li", "search-appareil");
         li.innerHTML = appareil;
         elt.appendChild(li);
         li.addEventListener("click", event => {
            this.doAddFiltreTags(li, 'appareil');
            console.log(li)
         })
      }
   }
   //Afficher les ustensiles(resultat recherche barre principale) dans les blocs de recherche avancée.
   doDisplayUstensiles(ustensiles) {
      
      let elt = document.querySelector(".bloc-search-resultat--ustensiles");
      if (ustensiles) {
         ustensiles.forEach(currentUstensile => {
            currentUstensile = Utils.capitalizeFirstLetter(currentUstensile);
            //
            if(this.ustensilesTries.includes(currentUstensile)){
               return true
            }else{  
               //alors ajout le nouveau ustensiles dans le nouveau array des utensiles non dupliqués
               this.ustensilesTries.push(currentUstensile)
               //
               let li = Utils.creatEltHtml("li", "search-ustensile");
               li.innerHTML = currentUstensile;
               elt.appendChild(li);
               li.addEventListener("click", event => {
                  this.doAddFiltreTags(li, 'ustensile');
                  console.log(li)
               })
            //
            }    
            //
         })
      }
   }

   /**
    * Attacher evenement "click" sur la fleche des 3 blocs de recherche
    */
   doAttachClickToFiltre() {
      let btns = document.querySelectorAll('.title-icone');
      btns.forEach(btn => {
         btn.addEventListener('click', event => {
            //Fermer les listes ouvertes
            let eltBlocs = document.querySelectorAll('.blocs-filtre');
            eltBlocs.forEach(currentBloc => {
               //si le bloc contient "filtre-open"
               if (currentBloc.classList.contains("filtre-open")) {
                  // supprimer "filtre-open" pour fermer la liste              
                  currentBloc.classList.remove("filtre-open");
                  // et Changer la direction de la flèche.
                  let eleI = currentBloc.querySelector('i').classList;
                  eleI.remove("fa-chevron-up");
                  eleI.add("fa-chevron-down");
               }
            })
            //Ouvrir la liste de l'elt cliqué
            let parent = btn.getAttribute('data-parent');
            // parent = .blocs-filtre--ingredient,
            document.querySelector(parent).classList.add("filtre-open");
            let eleI = btn.querySelector('i').classList;
            eleI.remove("fa-chevron-down");
            eleI.add("fa-chevron-up");
         });
      })
   }

   /**
    * Ajout d'un tag dans la section filtre/tag.
    * @param {*} li 
    * @param {*} filtre =ingrédient,appareil ou ustentile c'est pour appliquer un style au tag 
    */
   doAddFiltreTags(li, filtre) {
      let sectionTag = document.querySelector(".filtre-tags");

     
      let tag = Utils.creatEltHtml("div", "tag " + filtre);
      tag.innerHTML = `<span>${li.textContent}</span><i class="far fa-times-circle"></i>`;
      sectionTag.appendChild(tag);
      this.doCloseTag(tag);
   }
   /**
    * 
    * @param {*} tag 
    */
   doCloseTag(tag) {
      let icone = tag.querySelector('.far');
      icone.addEventListener("click", event => {
         //supprimer l'element Tag.
         tag.remove();
      })

   }

}

