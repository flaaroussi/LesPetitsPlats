
/**
 * Class to display recipes on the index.
 */

import Utils from "../utils/Utils.js";
import Ingredient from "./Ingredient.js";
import Appareil from "./Appareil.js";
import Ustensile from "./Ustensile.js";

export default class Recipe {

   /**
    * Constructeur
    */
   constructor(recipes) {
      this.recipes = recipes;   
        
      this.ingredientObjet = new Ingredient();
      this.appareilObjet = new Appareil();
      this.ustensileObjet = new Ustensile();  

      this.displayRecipes(recipes);
      this.doAttachEventBarreRecherche();
      //272
      this.doAttachClickToFiltre();
      this.doAttachSaisiInput();
   }

   //Etape 1************

   /**
    * Définir la fonction d'affichage des 50 recettes à partir de recipes.js et des recettes filtrées 
    * Afficher message si aucune recette ne contient le mot saisi.
    * @param {*} recipes :données des recettes affichées dans le fichier js.
    */
   displayRecipes(recipes) {
      let elt = document.getElementById("recipes_container");
      elt.innerHTML = "";

      //vider les listes: ingredients+ustensiles+appareils (sous listes des blocs des recherches avancées).
      document.querySelector(".bloc-search-resultat--ingredient").innerHTML = "";
      document.querySelector(".bloc-search-resultat--appareil").innerHTML = "";
      document.querySelector(".bloc-search-resultat--ustensiles").innerHTML = "";

      //vider les arrays des tags.
      this.ingredientObjet.ingredients = [];
      this.appareilObjet.appareils = [];
      this.ustensileObjet.ustensiles = [];

      //Si le nbre des recettes filtrées est sup à 0
      if (recipes.length > 0) {
         //activer le style de l'elt "recipes_container" déje annuler dans la condition "else".
         elt.style.display = "grid";
         //Activer le style d'affichage des recetts désactivé dans la condition 'else' suivantes.
         document.querySelector('.menu').style.display = "grid";
         recipes.forEach(currentRecipe => {
            let article = document.createElement("article");
            article.className = "recipe-card";
            article.innerHTML = this.getTemplateRecipe(currentRecipe);
            elt.appendChild(article);
         })

         //Si aucune recette ne repond au condision on afficher le message.
      } else {
         //annuler le style de l'elts parent "recipes_container" pour pouvoir afficher le mesage dans toute la page
         elt.style.display = "block";
         //* Ne pas afficher les blocs de recherches
         document.querySelector('.menu').style.display = "none";
         let msg = Utils.creatEltHtml("div", "msg-no-recipe");
         msg.innerHTML = `<p>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>`;
         elt.append(msg)
      }
   }

   /**
    * Créer la structure HTML du bloc recette
    * @param {array} recipes :data des 50 recettes
    * @returns {HTMLElement} :structure bloc recette
    */
   getTemplateRecipe(recipes) {
      //Element vide en haut du bloc recette.
      let template = `<div class="recipe-card_header"></div> `
      //Element ou sera affiché : titre + timer + temps.
      template += `
            <div class="title-time-recipe">
               <p class="nom">${recipes.nom} </p>
               <p class="temps"><i class="far fa-clock"></i> ${recipes.temps} min </p> 
            </div>
            <div class="recipe-card_content">
            <div>`
      //Element ou sera affiché les ingrédients.
      recipes.ingredients.forEach(currentIngredient => {
         //si l'"unité" n'existe pas dans le data == rien à afficher (ne pas affiché undefined).
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
         this.ingredientObjet.doDisplayIngredient(currentIngredient.ingredient);
      })
      //Afficher les appareils dans le le bloc de recherche "appareil".
      this.appareilObjet.doDisplayAppareil(recipes.appareil);
      //Afficher les appareils dans le le bloc de recherche "ustensiles".
      this.ustensileObjet.doDisplayUstensiles(recipes.ustensiles);
      //Element ou sera affiché la description de la recette.
      template += `</div>
            <p class="description textEllipsis">${recipes.description}</p>
            </div>`;
      return template;

   }

   /**
    * Attacher evenement 'saisi' à la barre principale.
    */
   doAttachEventBarreRecherche() {
      let elt = document.getElementById("barreRecherche");
      elt.value = "";
      elt.addEventListener('input', e => {
         //filtrer les recettes qui contient le mot saisi.
         this.filterRecipes(elt.value);
      });
      //attacher un click sur la loupe pour relancer la recherche
      let btn = document.getElementById("recherche_button");
      btn.addEventListener('click', e => {
         //filtrer et afficher les recettes qui contient le mot saisi.
         this.filterRecipes(elt.value);
      })
   }

   /**
    * Chercher le tag dans la liste des ingredients.
    * @param {*} ingredients 
    * @param {*} tag 
    * @returns {boolean} 
    */
   isIngredientsHaveMot(ingredients, tag) {
      let resultat = ingredients.some(currentIngredient => Utils.toLawer(currentIngredient.ingredient).includes(tag));
      return resultat;
   }

   /**
    * Afficher les recettes filtrées selon mot saisi dans la barre de recherche principale ou par tags.
    * @param {String} searchMot : mot clé;mot saisi;,,,,,,,,,,,,,,,
    */
   filterRecipes(searchMot) {
      //recettes filtrées soit par mot saisi soit par tags.
      let recipesFiltree = [];
      // Appliquer 1er filtre >> filtrer les recettes par mot saisi 
      if (searchMot && searchMot.length >= 3) {
         searchMot = Utils.toLawer(searchMot);
         recipesFiltree = this.recipes.filter(currentRecipe => {
            // filtre sur le nom
            let nom = Utils.toLawer(currentRecipe.nom);
            let description = Utils.toLawer(currentRecipe.description);
            if (nom.includes(searchMot) || description.includes(searchMot) || this.isIngredientsHaveMot(currentRecipe.ingredients, searchMot)) {
               return true;
            } else {
               return false;
            }
         })
      } else {
         //Afficher toutes les recettes.
         recipesFiltree = this.recipes;
      }

      /***************************************************************************** */
      //Appliquer 2 eme filtre: Filtrer les recettes  par tags des ingredients s'il y en a .
      /****************************************************************************** */

      //si au moins un tag ingredient existe(this.getIngredientTags()=tags selectionnés-tags fermés)
      if (this.ingredientObjet.getIngredientTags().length > 0) {
         recipesFiltree = recipesFiltree.filter(currentRecipe => {
            //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
            return this.ingredientObjet.isRecipesHaseTagsIngredient(currentRecipe);
         })
      }
      // Si la liste des "tags app" est sup à 0 alors ;;;;;;;;;;;;;;;;;;
      if (this.appareilObjet.getAppareilTags().length > 0) {
         recipesFiltree = recipesFiltree.filter(currentRecipe => {
            //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
            return this.appareilObjet.isRecipesHaseTagsAppareil(currentRecipe);
         })
      }
      if (this.ustensileObjet.getUstensileTags().length > 0) {
         recipesFiltree = recipesFiltree.filter(currentRecipe => {
            //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
            return this.ustensileObjet.isRecipesHaseTagsUstensile(currentRecipe);
         })
      }
      //Fin des conditions.

      //Afficher les recettes triées par SearchMot.
      this.displayRecipes(recipesFiltree);
   }

   /**
    * Filtrer la liste des elts d'un bloc selon mot clé saisi dans les blocs de recherche avancée.
    */
   doAttachSaisiInput() {
      let inputs = document.querySelectorAll(".saisiTag");
      inputs.forEach(currentInput => {
         currentInput.value = "";
         currentInput.addEventListener("input", event => {
            let inputSource = currentInput.getAttribute("data-filtre");
            switch (inputSource) {
               case 'ingredient':
                  this.ingredientObjet.filterIngredients(currentInput.value);
                  break;
               case 'appareil':
                  this.appareilObjet.filterAppareils(currentInput.value);
                  break;
               case 'ustensiles':
                  this.ustensileObjet.filterUstensiles(currentInput.value);
                  break;
            }
         });
         //Arrêter l'evenement click(deja attaché à la fleche+input+titre) su l'input de saisi.
         currentInput.addEventListener("click", event => {
            event.stopPropagation();
            event.preventDefault();
         });

      })
   }
   

   
   
   

   /**
    * Attacher evenement "click" sur la flèche des 3 blocs de recherche.
    * Fermer les filtres deja ouvertes.
    * Changer la flèche de up to down on cas de 2eme click.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    */
   doAttachClickToFiltre() {
      let btns = document.querySelectorAll('.title-icone');
      btns.forEach(btn => {
         btn.addEventListener('click', event => {
            //je dois garder stocker la classe de l'icone avant ouverture ou fermeture de filtre
            let iconeClassList = btn.querySelector("i").classList.value;
            // Fermer les filtres
            this.doCloseFiltresListes();
            //Ouvrir le filtre si l'icone contient la classe 'down'
            if (iconeClassList.includes('fa-chevron-down')) {
               //si la liste des elts est ouverte alor afficher l'input et cacher le titre de l'element.
               btn.querySelector("p").style = "display:none;visibility:hidden";
               btn.querySelector("input").style = "display:block;visibility:visible";

               //Ouvrir la liste de l'elt cliqué
               let parent = btn.getAttribute('data-parent');
               // parent = .blocs-filtre--ingredient,
               document.querySelector(parent).classList.add("filtre-open");
               let eleI = btn.querySelector('i').classList;
               eleI.remove("fa-chevron-down");
               eleI.add("fa-chevron-up");
            }
         }
         );
      });
   }   

   /**
    * Fermer les filtres
    * @param {*} 
    */
   doCloseFiltresListes() {
      //Fermer tous les filtres ouverts
      let eltBlocs = document.querySelectorAll('.blocs-filtre');
      eltBlocs.forEach(currentBloc => {
         //si le bloc contient "filtre-open"
         if (currentBloc.classList.contains("filtre-open")) {
            // supprimer "filtre-open" pour fermer la liste deja ouverte            
            currentBloc.classList.remove("filtre-open");
            // et Changer la direction de la flèche.
            let eleI = currentBloc.querySelector('i').classList;
            eleI.remove("fa-chevron-up");
            eleI.add("fa-chevron-down");
            currentBloc.querySelector("p").style = "display:block;visibility:visible";
            currentBloc.querySelector("input").style = "display:hidden;visibility:hidden";
         }
      });

   }
}