


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
      this.ustensilesTries = [];
      //creer un array des tags selectionnés.
      this.tagsListe = [];

      this.ingredientTagsListe = [];
      this.appareilTagsListe = [];
      this.ustensileTagsListe = [];
      
      this.displayRecipes(recipes);
      this.doAttachEventBarreRecherche();
      //272
      this.doAttachClickToFiltre();
      this.doAttachSaisiInput();
   }

   //Etape 1************
  
   /**
    * Afficher les 50 recettes 
    * Afficher message si aucune recette ne contient le mot saisi.
    * @param {*} recipes :données des recettes affichées dans le fichier js.
    */
   displayRecipes(recipes) {
      let elt = document.getElementById("recipes_container");
      elt.innerHTML = "";

      //vider les elements ingredients+ustensiles+appareils.
      document.querySelector(".bloc-search-resultat--ingredient").innerHTML = "";
      document.querySelector(".bloc-search-resultat--appareil").innerHTML = "";
      document.querySelector(".bloc-search-resultat--ustensiles").innerHTML = "";
      //vider array crée à partir de la liste des elts des recettes filtrées
      this.ingredients = [];
      this.appareils = [];
      this.ustensilesTries = [];
      //Si le nbre des recettes filtrées est sup à 0
      if(recipes.length > 0){
         //Activer affichage des blocs de recherche'désactive dans 'else'*
         document.querySelector('.menu').style.display = "grid";
         recipes.forEach(currentRecipe => {
            let article = document.createElement("article");
            article.className = "recipe-card";
            article.innerHTML = this.getTemplateRecipe(currentRecipe);
            elt.appendChild(article);
         })
      //Si non afficher message
      }else{
         //* Ne pas afficher les blocs de recherches
         document.querySelector('.menu').style.display = "none";
         let msg = Utils.creatEltHtml('div', "msg-no-recipe");
         msg.innerHTML = '« Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson »';
         elt.append(msg)
      }
      
   }

   /**
    * Créer la structure HTML du bloc recette
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
    * Attacher la saisie à la barre principale.
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
    * Rechercher le tag dans la liste des ingredients.
    * @param {*} ingredients 
    * @param {*} tag 
    * @returns {boolean} 
    */
   isIngredientsHaveMot(ingredients, tag) {
      let resultat = ingredients.some(currentIngredient => Utils.toLawer(currentIngredient.ingredient).includes(tag));
      return resultat;
   }

   /**
    * Afficher les recettes filtrées selon tag saisi dans la barre de recherche principale
    * @param {String} searchMot : mot clé;mot saisi;,,,,,,,,,,,,,,,
    */
   filterRecipes(searchMot) {
      let recipesSearchMot = [];
      if (searchMot && searchMot.length >= 3) {
         searchMot = Utils.toLawer(searchMot);

         recipesSearchMot = this.recipes.filter(currentRecipe => {
            // filtre sur le nom
            let nom = Utils.toLawer(currentRecipe.nom);
            let description = Utils.toLawer(currentRecipe.description);
            if (nom.includes(searchMot) || description.includes(searchMot) || this.isIngredientsHaveMot(currentRecipe.ingredients, searchMot)) {
               return true;
            } else {
               //
               //
               return false;
            }
         })
      } else {
         //Afficher toutes les recettes.
         recipesSearchMot = this.recipes;
      }
      //Filtrer les recettes par tags s'il y en a .
      if(this.ingredientTagsListe.length>0){        
         recipesSearchMot = recipesSearchMot.filter(currentRecipe =>{
            return this.isRecipesHaseTags(currentRecipe);
         })
      }
      //Afficher les recettes triées par SearchMot.
      this.displayRecipes(recipesSearchMot);
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

         //Arreter l'evenement click(deja attaché à la fleche+input+titre) su l'input de saisi.
         currentInput.addEventListener("click", event => {
            event.stopPropagation();
            event.preventDefault();
         });

      })
   }
   /**
    * Recherche principale
    * Filtrer et afficher la liste des ingredients qui contiennent le mot saisi
    * @param {string} motSaisi mot saisi dans l'input de la recherche avancée.
    */
   filterIngredients(motSaisi) {
      let result = [];
      motSaisi = Utils.toLawer(motSaisi);
      //garder les ingredients qui ont le mot saisi
      result = this.ingredients.filter(currentIngredient => {
      
         //convertir l'ingredient en minuscules. 
         currentIngredient = Utils.toLawer(currentIngredient);
         return currentIngredient.includes(motSaisi);
      });
      // vider la liste des ingrédients
      document.querySelector(".bloc-search-resultat--ingredient").innerHTML = "";
      //afficher les ingredient qui contiennent le mot saisi.
      
      result.forEach(currentIngredient => {
         this.doAddIngredient(currentIngredient)
      })
   }
   /**
    *Selectionner un ingredient et l'ajouter dans la liste des ingredients.
    * @param {string} ingredient 
    */
    doAddIngredient(ingredient) {
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
      console.log("ok")
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
      resultat = this.ustensilesTries.filter(currentUstensile =>{
        console.log("ok")
         currentUstensile = Utils.toLawer(currentUstensile);
         return currentUstensile.includes(motSaisi);
      });
      // vider la liste des ingrédients
      document.querySelector(".bloc-search-resultat--ustensiles").innerHTML = "";
      resultat.forEach(currentUstensile =>{
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
    * @param {*} recipe 
    * @returns 
    */
   isRecipesHaseTags(recipe){
      let resultat = [];
      resultat = this.ingredientTagsListe.filter(currentTag => {    
         let tag = Utils.toLawer(currentTag);
         let searchIngredient = this.isIngredientsHaveMot(recipe.ingredients, tag);   
         if(searchIngredient){
            return true;
         }else{
            return false;
         }
      });
      return resultat.length;
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
      if (this.appareils.includes(appareil)) {
         return true
      } else {
         //alors ajout le nouveau appareil dans le nouveau array des appareils non dupliqués
         this.appareils.push(appareil);
         //afficher liste des appareils non dupliqués ,,,,,,,,,,,,,,,,,,,,,,,,,
         this.doAddAppareil(appareil);
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
    * Attacher evenement "click" sur la fleche des 3 blocs de recherche.
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
            if(iconeClassList.includes('fa-chevron-down')){
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
      //si le tag existe dans l'array des tag
      if (this.ingredientTagsListe.includes(li.textContent) || this.appareilTagsListe.includes(li.textContent) || this.ustensileTagsListe.includes(li.textContent)) {
         //rien à faire
         return true
         //si non ajout du tag dans la liste des tags
      } else {
         if(filtre == 'ingredient'){
            this.ingredientTagsListe.push(li.textContent);
         }else if(filtre == 'appareil'){
            this.appareilTagsListe.push(li.textContent);
         }else{
            this.ustensileTagsListe.push(li.textContent);
         }
         
         //et crée la structure HTML de la liste des tags
         let tag = Utils.creatEltHtml("div", "tag " + filtre);
         tag.innerHTML = `<span>${li.textContent}</span><i class="far fa-times-circle"></i>`;
         sectionTag.appendChild(tag);
         this.doCloseTag(tag);
         this.doFilreRecipesByTag();
      }
   }
   doFilreRecipesByTag(){
      let searchMot = document.getElementById("barreRecherche").value;
      this.filterRecipes(searchMot)
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

   /**
    * Fermer les filtres
    * @param {*} 
    */   
   doCloseFiltresListes(){     
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

