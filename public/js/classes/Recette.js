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
   }

   //afficher les 50 recettes.
   displayRecipes(recipes) {
      let elt = document.getElementById("recipes_container");
      elt.innerHTML = "";
      document.querySelector(".bloc-search-resultat").innerHTML = "";

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
      //Afficher les recettes triées.
      this.displayRecipes(recipesTag);

   }

   //Afficher ingredient de la recherche 1 dans les btn du recheche2

   doDisplayIngredient(ingredient) {
      let elt = document.querySelector(".bloc-search-resultat--ingredient");
      console.log(ingredient)
      //elt.innerHTML = "";
      
      let li = Utils.creatEltHtml("li", "search-ingredient");
      li.innerHTML = ingredient;

      elt.appendChild(li);

   }

   doDisplayAppareil(recipes) {
      
      let elt = document.querySelector(".bloc-search-resultat--appareil");
      recipes.appareil.forEach(currentAppareil => {
         let li = Utils.creatEltHtml("li", "search-appareil");
         li.innerHTML = currentAppareil;
         console.log(currentAppareil);
         elt.appendChild(li);
      });
      
   }  
   
}

