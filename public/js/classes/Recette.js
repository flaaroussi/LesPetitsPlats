
/**
 * Class to display recipes on the index.
 */

import Utils from "../utils/Utils.js";
import Ingredient from "./Ingredient.js";

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
      this.ustensilesTries = [];
      //creer un array des tags selectionnés.
      this.tagsListe = [];



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
      this.ingredients = [];
      this.appareils = [];
      this.ustensilesTries = [];

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
         this.doDisplayIngredient(currentIngredient.ingredient);
      })
      //Afficher les appareils dans le le bloc de recherche "appareil".
      this.doDisplayAppareil(recipes.appareil);
      //Afficher les appareils dans le le bloc de recherche "ustensiles".
      this.doDisplayUstensiles(recipes.ustensiles);
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
      if (this.getIngredientTags().length > 0) {
         recipesFiltree = recipesFiltree.filter(currentRecipe => {
            //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
            return this.isRecipesHaseTagsIngredient(currentRecipe);
         })
      }
      // Si la liste des "tags app" est sup à 0 alors ;;;;;;;;;;;;;;;;;;
      if (this.getAppareilTags().length > 0) {
         recipesFiltree = recipesFiltree.filter(currentRecipe => {
            //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
            return this.isRecipesHaseTagsAppareil(currentRecipe);
         })
      }
      if (this.getUstensileTags().length > 0) {
         recipesFiltree = recipesFiltree.filter(currentRecipe => {
            //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
            return this.isRecipesHaseTagsUstensile(currentRecipe);
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
                  this.filterIngredients(currentInput.value);
                  break;
               case 'appareil':
                  this.filterAppareils(currentInput.value);
                  break;
               case 'ustensiles':
                  this.filterUstensiles(currentInput.value);
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
      * Filtrer et afficher la liste des ingredients qui contiennent le mot saisi dans l'input .
      * @param {string} motSaisi mot saisi dans l'input de la recherche avancée.
      */
   filterIngredients(motSaisi) {
      let result = [];
      motSaisi = Utils.toLawer(motSaisi);
      //garder les ingredients(this.getIngredientTags()=array des ingredients) qui ont le mot saisi
      result = this.ingredients.filter(currentIngredient => {
         //convertir l'ingredient en minuscule. 
         currentIngredient = Utils.toLawer(currentIngredient);
         return currentIngredient.includes(motSaisi);
      });
      // vider la liste des ingrédients
      document.querySelector(".bloc-search-resultat--ingredient").innerHTML = "";

      result.forEach(currentIngredient => {
         this.doAddIngredient(currentIngredient)
      })
   }
   /**
   *Selectionner un ingredient et l'ajouter dans la liste des ingredients.
   * @param {string} ingredient 
   */
   doAddIngredient(ingredient) {
      //creer structure HTML pour un ingredient
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


   /**
    * Filtrer et afficher la liste des appareils qui contiennent le mot saisi
    * @param {*} motSaisi 
    */
   filterAppareils(motSaisi) {
      let resultat = []
      motSaisi = Utils.toLawer(motSaisi);
      resultat = this.appareils.filter(currentAppareil => {
         currentAppareil = Utils.toLawer(currentAppareil);
         return currentAppareil.includes(motSaisi);
      });
      // vider la liste des ingrédients
      document.querySelector(".bloc-search-resultat--appareil").innerHTML = "";
      resultat.forEach(currentAppareil => {
         this.doAddAppareil(currentAppareil);
      })
   }
   /**
    * Selectionner un appareil et l'ajouter dans la liste des appareils
    * @param {*} appareil 
    * @returns 
    */
   doAddAppareil(appareil) {
      let elt = document.querySelector(".bloc-search-resultat--appareil");
      let li = Utils.creatEltHtml("li", "search-appareil");
      li.innerHTML = appareil;
      elt.appendChild(li);
      li.addEventListener("click", event => {
         this.doAddFiltreTags(li, 'appareil');
      })
   }


   /**
    * Filtrer et afficher la liste des ustensiles qui contiennent le mot saisi
    * @param {*} motSaisi 
    */
   filterUstensiles(motSaisi) {
      let resultat = [];
      motSaisi = Utils.toLawer(motSaisi);
      resultat = this.ustensilesTries.filter(currentUstensile => {
         console.log("ok")
         currentUstensile = Utils.toLawer(currentUstensile);
         return currentUstensile.includes(motSaisi);
      });
      // vider la liste des ingrédients
      document.querySelector(".bloc-search-resultat--ustensiles").innerHTML = "";
      resultat.forEach(currentUstensile => {
         this.doAddUstensiles(currentUstensile);
      })
   }
   /**
    * Selectionner un ustensile et l'ajouter dans la liste des ustensiles.
    * @param {*} ustensile 
    */
   doAddUstensiles(currentUstensile) {
      let elt = document.querySelector(".bloc-search-resultat--ustensiles");
      let li = Utils.creatEltHtml("li", "search-ustensile");
      li.innerHTML = currentUstensile;
      elt.appendChild(li);
      li.addEventListener("click", event => {
         this.doAddFiltreTags(li, 'ustensile');
      })
   }

   /**
    * Est ce que la recette contient les tags ingredients : true ou false.
    * @param {*} recipe :La recette filtrée resultat de la recherche principale. 
    * @returns {boleen} true: si les recettes contiennent l'ensembles des tags ingredients electionnés.
    */
   isRecipesHaseTagsIngredient(recipe) {
      //On crée une array à partir de la fonction getIngredientTags qui nous retourne tags=tagsselectionné-tags fermés
      // au lieu l'elt HTML '.filtre-tags .ingredient span' qui va nous donner tags = tags selectionés et va garder les tags fermés.
      let tagsListe = this.getIngredientTags();
      let resultat = [];
      resultat = recipe.ingredients.filter(currentIng => {
         //Variable qui permet juste de savoir est ce que le tag existe dans l'ingredient.
         let stat = [];
         tagsListe.forEach(currentTag => {
            //si currentTag existe dans l'ingredient        
            if (Utils.toLawer(currentIng.ingredient).includes(Utils.toLawer(currentTag.textContent))) {
               //alors ajouté currentIng.ingredient dans stat
               stat.push(currentIng.ingredient);
            }
         });
         //si "stat" est non vide alors return true
         return (stat.length);
      })
      //si le nbre de tags selectionnés est égal au nbre d'ingredients alors la recette doit etre affichée.
      // return (resultat.length == tagsListe.length) ? true : false;
      if (resultat.length == tagsListe.length) {
         return true
      } else {
         return false;
      }
   }
   /**
    * Est ce que la recette contient au moins un seul tag appareil
    * parceque dans le json chaque recette contient un seul appareil
    * @param {*} recipe La recette filtrée resultat de la recherche principale. 
    * @returns 
    */
   isRecipesHaseTagsAppareil(recipe) {
      let tagsListe = this.getAppareilTags();
      log(tagsListe);
      if (tagsListe.length > 0) {
         let counter = [];
         tagsListe.forEach(currentTag => {
            console.log('ok')
            if (Utils.toLawer(recipe.appareil).includes(Utils.toLawer(currentTag.textContent))) {
               counter.push(recipe.appareil);
            }
         })
         //recip.appareil contient juste un seul elt donc si au moins un seul tag existe dans l'appareil
         //c-a-d le counter est supereur à 0
         if (counter.length > 0) {
            //donc return true
            return true
         } else {
            return false;
         }
      } else {
         return true
      }
   }
   /**
    * Est ce que la recette contient les tags ustentiles : true ou false.
    * @param {*} recipe :La recette filtrée resultat de la recherche principale. 
    * @returns {boleen} true: si les recettes contiennent l'ensembles des tags ustensiles selectionnés.
    */
   isRecipesHaseTagsUstensile(recipe) {
      console.log(recipe.ustensiles)
      let tagsListe = this.getUstensileTags();
      let resultat = [];
      //si ustensile existe dans le fichier parent js (recipes.js)
      if (recipe.ustensiles) {
         //on applique le filtre::::::::::::::::::::::::::
         resultat = recipe.ustensiles.filter(currentUstensile => {
            //Variable qui permet juste de savoir est ce que le tag existe dans l'ustensile.
            let stat = [];
            tagsListe.forEach(currentTag => {
               //si currentTag existe dans l'ustensile        
               if (Utils.toLawer(currentUstensile).includes(Utils.toLawer(currentTag.textContent))) {
                  //alors ajouté currentIng.ingredient dans stat
                  stat.push(currentUstensile);
               }
            });
            //si "stat" est non vide alors return true
            return (stat.length);
         })
      }

      //si le nbre de tags selectionnés est égal au nbre dustensiles alors la recette doit etre affichée.
      // return (resultat.length == tagsListe.length) ? true : false;
      if (resultat.length == tagsListe.length) {
         return true
      } else {
         return false;
      }
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
         this.doAddIngredient(ingredient);
      }
   }
   /**
    * Afficher les appareils(resultat recherche barre principale) dans les blocs de recherche avancée.
    * @param {*} appareil 
    * @returns 
    */
   doDisplayAppareil(appareil) {
      //si l'appareil existe dans le js 
      if (appareil) {
         //donc if ::::::::::::::::::::
         if (this.appareils.includes(appareil)) {
            return true
            //si non ::::::::::::::::::::
         } else {
            //alors ajout le nouveau appareil dans le nouveau array des appareils non dupliqués
            this.appareils.push(appareil);
            //afficher liste des appareils non dupliqués ,,,,,,,,,,,,,,,,,,,,,,,,,
            this.doAddAppareil(appareil);
         }
      }
   }
   /**
    * Afficher les ustensiles(resultat recherche barre principale) dans les blocs de recherche avancée.
    * @param {*} ustensiles 
    */
   doDisplayUstensiles(ustensiles) {
      if (ustensiles) {
         ustensiles.forEach(currentUstensile => {
            currentUstensile = Utils.capitalizeFirstLetter(currentUstensile);
            if (this.ustensilesTries.includes(currentUstensile)) {
               //return true c-a-d rien à faire
               return true
            } else {
               //alors ajout le nouveau ustensiles dans le nouveau array des utensiles non dupliqués.
               this.ustensilesTries.push(currentUstensile);
               this.doAddUstensiles(currentUstensile);
            }
         })
      }
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
    * Ajout d'un tag dans la section filtre/tag.
    * @param {*} li 
    * @param {*} filtre =ingrédient,appareil ou ustentile c'est pour appliquer un style au tag 
    */
   doAddFiltreTags(li, filtre) {
      let sectionTag = document.querySelector(".filtre-tags");
      //condition pour ne pas afficher les tags dupliqués.
      //si le tag existe dans l'array des tags(array retourné par la fonction )
      if (this.getIngredientTags().includes(li.textContent) || this.getAppareilTags().includes(li.textContent) || this.getUstensileTags().includes(li.textContent)) {
         //rien à faire
         return true
         //si non ajout du tag dans la liste des tags
      } else {
         //;;;;;;;;;;;;;;;;;;;;;;;;;
         if (filtre == 'ingredient') {
            this.getIngredientTags().push(li.textContent);
         } else if (filtre == 'appareil') {
            this.getAppareilTags().push(li.textContent);
         } else {
            this.getUstensileTags().push(li.textContent);
         }

         //on crée la structure HTML de la liste des tags
         let tag = Utils.creatEltHtml("div", "tag " + filtre);
         tag.innerHTML = `<span>${li.textContent}</span><i class="far fa-times-circle"></i>`;
         sectionTag.appendChild(tag);
         //......................
         this.doCloseTag(tag);
         //..........................
         this.doFilreRecipesByTag();
      }
   }
   /***Fontcion pour créer array des tags selectionnés =tags selectionnées-tags fermés*************** */
   /**
    * Retourne la liste des tags ingrédients selectionnés
    * cette fonction nous donne tags =tags selectionés - tags fermés 
    * @returns 
    */
   getIngredientTags() {
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .ingredient span'));
      log(tagsListe)
      return tagsListe;
   }
   /**
    * Retourne la liste des tags appareils selectionnés
    * cette fonction nous donne tags =tags selectionés - tags fermés 
    * @returns 
    */
   getAppareilTags() {
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .appareil span'));
      log(tagsListe)
      return tagsListe;
   }
   /**
    * Retourne la liste des tag usetensiles selectionnés
    * cette fonction nous donne tags =tags selectionés - tags fermés 
    * @returns 
    */
   getUstensileTags() {
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .ustensile span'));
      return tagsListe;
   }
   /*********************************************************************************************** */


   /**
    * 
    */
   doFilreRecipesByTag() {
      let searchMot = document.getElementById("barreRecherche").value;
      this.filterRecipes(searchMot)
   }
   /**
    * Fermer le tag cliqué
    * @param {*} tag 
    */
   doCloseTag(tag) {
      let icone = tag.querySelector('.far');
      icone.addEventListener("click", event => {
         //supprimer l'element Tag.
         tag.remove();
         //Réafficher les recette filtré par ;;;;;;;;;;;;;;;;;;;mot clé ;;;;;;;;;;;;;;;;;;;;
         this.doFilreRecipesByTag();
      })
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

