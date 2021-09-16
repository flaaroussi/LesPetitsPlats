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

      recipes.forEach(currentRecipe => {
         let article = document.createElement("article");
         article.className = "recipe-card";
         article.innerHTML = this.getTemplateRecipe(currentRecipe);
         elt.appendChild(article);
      })

   }

   /**
    * Structure HTML du bloc recette
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
         this.doDisplayIngredient(currentIngredient.ingredient);


      })

      //Afficher les appareils dans le btn appareil
      this.doDisplayAppareil(recipes.appareil);
      //
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
    * 
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
            // >> return nom.includes(tag) || description.includes(tag);
         })
      } else {
         //Afficher toutes les recettes.
         recipesTag = this.recipes;
      }
      //Afficher les recettes triées par tag.
      this.displayRecipes(recipesTag);

      


   }

   //Afficher ingredient de la recherche 1 dans les btn du recheche2
   doDisplayIngredient(ingredient) {
      let elt = document.querySelector(".bloc-search-resultat--ingredient");
      let li = Utils.creatEltHtml("li", "search-ingredient");
      li.innerHTML = ingredient;
      elt.appendChild(li);

   }

   doDisplayAppareil(appareils) {
      let elt = document.querySelector(".bloc-search-resultat--appareil");
      let li = Utils.creatEltHtml("li", "search-appareil");
      li.innerHTML = appareils;
      elt.appendChild(li);
   }

   doDisplayUstensiles(ustensiles) {
      let elt = document.querySelector(".bloc-search-resultat--ustensiles");
      if(ustensiles){
         ustensiles.forEach(currentUstensiles =>{
            let li = Utils.creatEltHtml("li", "search-appareil");
            li.innerHTML = currentUstensiles;
           elt.appendChild(li);
         })
      }
      
   }


   //attacher evenement "click" sur l'econe ingredient

   doAttachClickToFiltre(){

      let btns = document.querySelectorAll('.title-icone');
     
      btns.forEach(btn =>{

         btn.addEventListener('click', event =>{
            //Fermer les listes ouvertes
            let eltBlocs = document.querySelectorAll('.blocs-filtre');
            eltBlocs.forEach(currentBloc =>{
               if(currentBloc.classList.contains("filtre-open")){ 
                  // ferme la liste              
                  currentBloc.classList.remove("filtre-open");  
                  // renverse l'icon
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
}

