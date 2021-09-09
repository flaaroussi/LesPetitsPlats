/**
 * Class to display recipes on the index.
 */

import Utils from "../utils/Utils.js";

export default class Recipe{

   /**
    * 
    */
   constructor (recipes){
      this.recipes = recipes;
      this.displayRecipes(recipes);
      this.enterMot();
    
   }

   //afficher les 50 recettes.
   displayRecipes(recipes){
      let elt = document.getElementById("recipes_container");
      elt.innerHTML = "";
      recipes.forEach(currentRecipe =>{
      let article = document.createElement("article");
      article.className = "recipe-card";
      article.innerHTML = this.getTemplateRecipe(currentRecipe);
      elt.appendChild(article);

      })
   }

   /**
    * Structure HTML du bloc recette
    * @param {array} recipes :data des 50 recettes
    * @returns {HTMLElement} :structure bloc recette
    */
   getTemplateRecipe(recipes){
         //Element vide en haut du bloc recette
         let template = `<div class="recipe-card_header"></div> `

         //Element ou sera affiché: titre + timer+temps
         template += `
            <div class="title-time-recipe">
               <p class="nom">${recipes.nom} </p>
               <p class="temps"><i class="far fa-clock"></i> ${recipes.temps} min </p> 
            </div>
            <div class="recipe-card_content">
            <div>
         ` 
         //Element ou sera affiché les ingrédients
         recipes.ingredients.forEach(currentIngredient=>{
            //si l'"unité" n'existe pas dans le data ==rien à afficher
            //let uniteValue = currentIngredient.unite ? currentIngredient.unite : "" ;
            //cela veut dire condition ? val1 : val2 Si condition vaut true,
            // l'opérateur vaudra val1. Sinon il vaudra val2
            let uniteValue = "";
            if(currentIngredient.unite){
                uniteValue = currentIngredient.unite;
            }
            let quantiteValue = "";
            let separateurPoint ="";
            if(currentIngredient.quantite){
               quantiteValue = currentIngredient.quantite;
               separateurPoint =":";
            }
            template+=`
            <div class="ingredient">
               ${currentIngredient.ingredient}
               ${separateurPoint}
               ${quantiteValue} 
               ${uniteValue}
            </div>
            `
         })
         
         //Element ou sera affichée la description de la recette.
         template+=`</div>
         <p class="description">${recipes.description}</p></div>`;

      return template;
   }
  

  
   /**
    * Récupérer le mot saisi
    */
   enterMot(){
      let elt = document.getElementById("barreRecherche");
   
      elt.addEventListener('input', e =>{
         //Controler le mot saisi
         this.filterRecipes(elt.value);
      })

   }

   isIngredientsHaveTag(ingredients, tag){
      let listIngredientsHaveTag = ingredients.forEach(currentIngredient => Utils.toLawer(currentIngredient.ingredient).includes(tag) );
      if(listIngredientsHaveTag.length){
         return true;
      }else{
         return false;
      }
   }
   /**
    * 
    * @param {*} tag 
    */
   filterRecipes(tag){
      let recipesTag = [];
      if(tag && tag.length>=3){
         tag = Utils.toLawer(tag);
         recipesTag = this.recipes.filter(currentRecipe => {
            // filtre sur le nom
            let nom = Utils.toLawer(currentRecipe.nom);
            
            let description = Utils.toLawer(currentRecipe.description);

            if(nom.includes(tag) || description.includes(tag) || this.isIngredientsHaveTag(currentRecipe.ingredients, tag)){
               alert('ok')
               return true;
            }else{
               return false;
            }
            // >> return nom.includes(tag) || description.includes(tag);
            
         })
        
      }else{
         //Afficher toutes les recettes.
         recipesTag = this.recipes;
      }
     //Afficher les recettes triées.
      this.displayRecipes(recipesTag);
   }
   
}

