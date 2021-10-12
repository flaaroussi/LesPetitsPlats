 class Utils {
   static toLawer(texte){
      if(texte){
         return texte.toLowerCase();
      }else{
         return  "";
      }
   }
   static creatEltHtml(tagName, classTag){
      let tag = document.createElement(tagName);
      tag.className = classTag;
      
      return tag;
   }
   static capitalizeFirstLetter(string) {
      if(string){
         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      }

    }
   /**
    * le click se declenche automatiquement sur la loupe qui permet de lancer le filtre et l'affichage.
    */
   static doRelanceRecherche(){
      document.getElementById("recherche_button").dispatchEvent(new Event('click'));
   }
}

class Ingredient{
   constructor(){
      //creer une array à partir de la liste des ingrédients des recettes filtrées
      this.ingredients = [];
   }
   /**
    * Retourne la liste des tags ingrédients selectionnés
    * cette fonction nous donne tags =tags selectionés - tags fermés 
    * @returns 
    */
    getIngredientTags() {
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .ingredient span'));
      return tagsListe;
   }

   /**
    * Fermer le tag cliqué
    * @param {Element} tag 
    */
    doCloseTag(tag) {
      let icone = tag.querySelector('.far');
      icone.addEventListener("click", event => {         
         //supprimer l'element Tag.
         tag.remove();
         //Acualiser la recherche des recettes
         Utils.doRelanceRecherche();
      })
   }

   /**
      * Filtrer et afficher la liste des ingredients qui contiennent le mot saisi dans l'input .
      * @param {string} motSaisi 
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
    * Est ce que la recette contient les tags ingredients : true ou false.
    * @param {*} recipe :La recette filtrée resultat de la recherche principale. 
    * @returns {boleen} true: si les recettes contiennent l'ensembles des tags ingredients electionnés.
    */
    isRecipesHaseTagsIngredient(recipe) {
      //On crée une array à partir de la fonction getIngredientTags qui nous retourne tags=tagsselectionné-tags fermés
      //au lieu l'elt HTML '.filtre-tags .ingredient span' qui va nous donner tags = tags selectionés et va garder les tags fermés.
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
}

class Appareil {

   constructor() {
      
      this.appareils = [];
   }
   /**
    * Retourne la liste des tags appareilsaffichés sous la barre principale.
    * cette fonction nous donne tags =tags selectionés - tags fermés 
    * @returns {Array} liste des tags affichés
    */
   getAppareilTags() {
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .appareil span'));
      return tagsListe;
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
         //Acualiser la recherche des recettes
         Utils.doRelanceRecherche();
      })
   }

   /**
   * Est ce que la recette contient au moins un seul tag appareil
   * parceque dans le json chaque recette contient un seul appareil
   * @param {*} recipe La recette filtrée resultat de la recherche principale. 
   * @returns 
   */
   isRecipesHaseTagsAppareil(recipe) {
      let tagsListe = this.getAppareilTags();
      if (tagsListe.length > 0) {
         let counter = [];
         tagsListe.forEach(currentTag => {
            if (Utils.toLawer(recipe.appareil).includes(Utils.toLawer(currentTag.textContent))) {
               counter.push(recipe.appareil);
            }
         })
         //recip.appareil contient juste un seul elt donc si au moins un seul tag existe dans l'appareil
         //c-a-d le counter est > à 0
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
}

class Ustensile{

   constructor(){
     //creer un array à partir de la liste des ustensiles des recettes filtrées
     this.ustensiles = []; 
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

   /**
    * Est ce que la recette contient les tags ustentiles : true ou false.
    * @param {*} recipe :La recette filtrée resultat de la recherche principale. 
    * @returns {boleen} true: si les recettes contiennent l'ensembles des tags ustensiles selectionnés.
    */
    isRecipesHaseTagsUstensile(recipe) {
      let tagsListe = this.getUstensileTags();
      let resultat = [];
      //si ustensile existe dans le fichier parent js (recipes.js)
      if (recipe.ustensiles) {
         //on applique le filtre
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

}

class Recipe {
    constructor(recipes) {
       this.recipes = recipes;
       //Instanciation des classes qui permettent de gérer les filtres et l'affichages des
       //trois blocs de recherche avancée.
       this.ingredientObjet = new Ingredient();
       this.appareilObjet = new Appareil();
       this.ustensileObjet = new Ustensile();
       //Afficher les recettes
       //this.displayRecipes(recipes);
       //Excuter 'click' à l' input dans la barre de recherche 
       //this.doAttachEventBarreRecherche();
       //Executer evenement "click" sur la flèche des 3 blocs de recherche.
       //this.doAttachClickToFiltre();
       //Declencher la saisi dans les blocs de recherche avancée.
      // this.doAttachSaisiInput();
    }
     
       /**
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
          // Si la liste des "tags app" est sup à 0 alors 
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
          //this.displayRecipes(recipesFiltree);
          return recipesFiltree;
       }
    }

    const recipe = new Recipe(recipesData);
    recipe.filterRecipes('coco');