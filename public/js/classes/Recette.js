/**
 * Afficher les recettes .
 */
import Utils from "../utils/Utils.js";
import Ingredient from "./Ingredient.js";
import Appareil from "./Appareil.js";
import Ustensile from "./Ustensile.js";

export default class Recipe {
   constructor(recipes) {
      this.recipes = recipes;
      //Instanciation des classes qui permettent de gérer les filtres et l'affichages des
      //trois blocs de recherche avancée.
      this.ingredientObjet = new Ingredient();
      this.appareilObjet = new Appareil();
      this.ustensileObjet = new Ustensile();
      //Afficher les recettes
      this.displayRecipes(recipes);
      //Excuter e 'click' à la input dans la barre de recherche ;;;;;;;;;;;;;;;;;;;;;;;;;;;
      this.doAttachEventBarreRecherche();
      //Executer evenement "click" sur la flèche des 3 blocs de recherche.
      this.doAttachClickToFiltre();
      //Declencher la saisi dans les blocs de recherche avancée.
      this.doAttachSaisiInput();
   }

   /**
    * Affiher les recettes (totalité des recettes ou bien recettes filtrées) à partir de recipes.js 
    * Afficher message si aucune recette ne contient le mot saisi.
    * On faits appelle aux fonctions doDisplayAppareil,doDisplayIngredient et doDisplayUstensiles 
    * pour afficher les listes des ing,app,ust dans les blocs de recherche avancée
    * @param {*} recipes :données des recettes dans le fichier js.
    */
   displayRecipes(recipes) {
      let elt = document.getElementById("recipes_container");
      elt.innerHTML = "";
      //vider les listes: ingredients+ustensiles+appareils (sous listes des blocs des recherches avancées).
      document.querySelector(".bloc-search-resultat--ingredient").innerHTML = "";
      document.querySelector(".bloc-search-resultat--appareil").innerHTML = "";
      document.querySelector(".bloc-search-resultat--ustensiles").innerHTML = "";
      //vider les arrays des tags déja définis dans les classes.
      this.ingredientObjet.ingredients = [];
      this.appareilObjet.appareils = [];
      this.ustensileObjet.ustensiles = [];
      //Si le nbre des recettes est sup à 0:
      //on a ajouté cette condition pour pouvoir afficher le "msg" si la condition n'est pas respectée. 
      if (recipes.length > 0) {
         //activer le style de l'elt "recipes_container" déje annuler dans la condition "else".
         elt.style.display = "grid";
         //Activer le style d'affichage des blocs de recherche désactivé dans la condition 'else' suivante.
         document.querySelector('.menu').style.display = "grid";

         recipes.forEach(currentRecipe => {
            let article = document.createElement("article");
            article.className = "recipe-card";
            article.innerHTML = this.getTemplateRecipe(currentRecipe);
            elt.appendChild(article);
         })
         //Si aucune recette ne répond au condition on afficher le message.
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
      //Elt vide en haut du bloc recette.
      let template = `<div class="recipe-card_header"></div> `
      //Elt ou sera affiché : titre + timer + temps.
      template += `
            <div class="title-time-recipe">
               <p class="nom">${recipes.nom} </p>
               <p class="temps"><i class="far fa-clock"></i> ${recipes.temps} min </p> 
            </div>
            <div class="recipe-card_content">
            <div>`
      //Elt ou sera affiché les ingrédients dans card recette.
      recipes.ingredients.forEach(currentIngredient => {
         //si l"unité" n'existe pas dans le data == rien à afficher (ne pas affiché undefined).
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
      //Afficher les ustensiles dans le le bloc de recherche "ustensiles".
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
         //filtrer et afficher les recettes qui contient le mot saisi ou bien tags selectionnés.
         this.filterRecipes(elt.value);
      })
   }
   /************************************************ */
   /**?????????????????
    * Chercher le mot dans la liste des ingredients.
    * @param {*} ingredients array des ingrédients
    * @param {*} mot 
    * @returns {booléen} 
    */
   isIngredientsHaveMot(ingredients, mot) {
      //si au moins un currentIngredient contient le mot >> return true , sinon return false
      let resultat = ingredients.some(currentIngredient => Utils.toLawer(currentIngredient.ingredient).includes(mot));
      return resultat;
   }
   /*****************************************************/
   /**
    * Afficher les recettes filtrées "mot saisi recherche principale" ou par tags.
    * @param {String} searchMot : mot saisi
    */
   filterRecipes(searchMot) {
      //recettes filtrées soit par mot saisi soit par tags.
      let recipesFiltree = [];
      //Appliquer 1er filtre >> filtrer les recettes par mot saisi 
      if (searchMot && searchMot.length >= 3) {
         searchMot = Utils.toLawer(searchMot);
         recipesFiltree = this.recipes.filter(currentRecipe => {
            // filtre sur le nom
            let nom = Utils.toLawer(currentRecipe.nom);
            let description = Utils.toLawer(currentRecipe.description);
            if (nom.includes(searchMot) || description.includes(searchMot) || this.isIngredientsHaveMot(currentRecipe.ingredients, searchMot)) {
               // true = le mot existe dans la recette donc ajouter la recette dans recipesFiltree.
               return true;
            } else {
               return false;
            }
         });
      } else {
         //pas de filtre si le mot saisi < 3 c'est a dire rien à faire
         recipesFiltree = this.recipes;
      }

      //Appliquer 2 eme filtre: Filtrer les recettes  par tags s'il y en a .
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
         //Arrêter l'evenement click(deja attaché à la fleche+input+titre) sur l'input de saisi.
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
            console.log(iconeClassList)
            // Fermer les filtres
            this.doCloseFiltresListes();
            // si l'icone contient la classe 'down' alors Ouvrir le filtre
            if (iconeClassList.includes('fa-chevron-down')) {
               
               btn.querySelector("p").style = "display:none;visibility:hidden";
               btn.querySelector("input").style = "display:block;visibility:visible";

               //et changer la direction de la flèche.
               //pourque se soit dynamique.
               let parent = btn.getAttribute('data-parent');
               console.log(parent)
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
    * Fermer les filtres deja ouvertes
    * @param {*} 
    */
   doCloseFiltresListes() {
      //Fermer tous les filtres ouvertes
      let eltBlocs = document.querySelectorAll('.blocs-filtre');
      eltBlocs.forEach(currentBloc => {
         //si le bloc contient "filtre-open"
         if (currentBloc.classList.contains("filtre-open")) {
            // supprimer "filtre-open" pour fermer la liste deja ouverte            
            currentBloc.classList.remove("filtre-open");
            // et changer la direction de la flèche.
            let eleI = currentBloc.querySelector('i').classList;
            eleI.remove("fa-chevron-up");
            eleI.add("fa-chevron-down");
            currentBloc.querySelector("p").style = "display:block;visibility:visible";
            currentBloc.querySelector("input").style = "display:hidden;visibility:hidden";
         }
      });
   }
}