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

    // fonction permet de cliquer sur le button (loup) pour lancer la recherche;;;;;;;;;;;;;;;;;;;;
   /**
    * ???????????????????????????????????le click se declenche automatiquement sur la loupe qui permet de lancer le filtre et l'affichage.
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
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .ingredient span.tag-libelle'));
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
      * Filtrer et afficher la liste des ingredients qui contiennent le mot saisi dans l'input .
      * @param {string} motSaisi mot saisi dans l'input de la recherche avancée.
      */
    filterIngredients(motSaisi) {
      let result = [];
      motSaisi = Utils.toLawer(motSaisi);
      //Nouveau algorithme.
      let totalIngredient = this.ingredients.length;
      for(let i = 0; i < totalIngredient; i++){
         let ingredient = this.ingredients[i];
         ingredient = Utils.toLawer(ingredient);
         motSaisi = Utils.toLawer(motSaisi);
         if(ingredient.includes(motSaisi)){
            result.push(ingredient);
         }
      }
      //Fin nouveau algorithme.

      /*Ancien algorithme
      //garder les ingredients(this.getIngredientTags()=array des ingredients) qui ont le mot saisi
      result = this.ingredients.filter(currentIngredient => {
         //convertir l'ingredient en minuscule. 
         currentIngredient = Utils.toLawer(currentIngredient);
         return currentIngredient.includes(motSaisi);
      });
      */

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

}

class Appareil {

   constructor() {
      //creer un array à partir de la liste des appareils des recettes filtrées
      //dans la sous.............
      this.appareils = [];
   }

   
   


   /**
   * Ajout d'un tag dans la section filtre/tag.
   * @param {*} li 
   * @param {*} filtre =ingrédient,appareil ou ustentile c'est pour appliquer un style au tag 
   */
   doAddFiltreTags(li, filtre) {
      let sectionTag = document.querySelector(".filtre-tags");
      //condition pour ne pas afficher les tags dupliqués.
      //On recupere la liste des tags.
      let tagsListe = this.getAppareilTags();
      //Nouveau algorithme
      //on crée une array provisoire 
      let tagListeSelected = [];
      let totalTagsListe = tagsListe.length;
      for(let i = 0;i < totalTagsListe; i++ ){
         let tag = tagsListe[i];
         tag.textContent = Utils.toLawer(tag.textContent);
         li.textContent = Utils.toLawer(li.textContent);
         if(tag.textContent == li.textContent){
            tagListeSelected.push(tag.textContent);
         }
      }
      //Fin nouveau algorithme.
      /**ancien algorithme
      //On garde les tags qui respecte la condition 
      tagsListe = tagsListe.filter(currentTag => Utils.toLawer(currentTag.textContent) == Utils.toLawer(li.textContent));
      */
      if (tagListeSelected.length > 0) {
         //rien à faire
         return true
         //si non ajout du tag dans la liste des tags
      } else {
         //on crée la structure HTML de la liste des tags
         let tag = Utils.creatEltHtml("div", "tag " + filtre);
         tag.innerHTML = `<span class="tag-libelle">${li.textContent}</span><i class="far fa-times-circle" title="Supprimer"></i>`;
         sectionTag.appendChild(tag);
         //......................
         this.doCloseTag(tag);
         //..........................
         Utils.doRelanceRecherche();
         
      }
   }

   /**
    * Retourne la liste des tags appareils selectionnés
    * cette fonction nous donne tags =tags selectionés - tags fermés 
    * @returns 
    */
   getAppareilTags() {
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .appareil span.tag-libelle'));
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
    * Filtrer et afficher la liste des ustensiles qui contiennent le mot saisi
    * @param {*} motSaisi 
    */
   filterUstensiles(motSaisi) {
      let resultat = [];
      motSaisi = Utils.toLawer(motSaisi);
      //Nouveau algorithme
      let totalustensiles = this.ustensiles.length;
      for(let i = 0; i < totalustensiles; i++){
         let ustensile = this.ustensiles[i];
         ustensile = Utils.toLawer(ustensile);
         if(ustensile.includes(motSaisi)){
            resultat.push(ustensile);
         }
      }
      //Fin nouveau algorithme.

      /**ancien algorithme
      resultat = this.ustensiles.filter(currentUstensile => {
         currentUstensile = Utils.toLawer(currentUstensile);
         return currentUstensile.includes(motSaisi);
      });
      */

      // vider la liste des ingrédients
      document.querySelector(".bloc-search-resultat--ustensiles").innerHTML = "";
      resultat.forEach(currentUstensile => {
         this.doAddUstensiles(currentUstensile);
      })
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
    * Retourne la liste des tag usetensiles selectionnés
    * cette fonction nous donne tags =tags selectionés - tags fermés 
    * @returns 
    */
    getUstensileTags() {
      let tagsListe = Array.from(document.querySelectorAll('.filtre-tags .ustensile span.tag-libelle'));
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
       //Excuter e 'click' à la input dans la barre de recherche ;;;;;;;;;;;;;;;;;;;;;;;;;;;
       //this.doAttachEventBarreRecherche();
       //Executer evenement "click" sur la flèche des 3 blocs de recherche.
       //this.doAttachClickToFiltre();
       //Declencher la saisi dans les blocs de recherche avancée.
       //this.doAttachSaisiInput();
    }
 
    
  
    /************************************************ */
    /**
     * Chercher le mot dans l'array'des ingredients.
     * @param {*} ingredients array des ingrédients
     * @param {*} mot 
     * @returns {booléen} 
     */
    isIngredientsHaveMot(ingredients, mot) {
       //si au moins un Ingredient contient le mot >> return true , sinon return false
       let totalIngredient = ingredients.length;
       let resultat = [];
       for (let i = 0; i < totalIngredient; i++) {
          let ingredient = ingredients[i];
          if (Utils.toLawer(ingredient.ingredient).includes(mot)) {
             resultat.push(ingredient);
          }
       }
       if (resultat.length > 0) {
          return true;
       } else {
          return false;
       }
 
 
       /** ancien algorithme
       //si au moins un currentIngredient contient le mot >> return true , sinon return false
       let resultat = ingredients.some(currentIngredient => Utils.toLawer(currentIngredient.ingredient).includes(mot));
       return resultat;
       */
 
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
 
          //pour que le traitement du calcul de nbre des recettes se fait une seul fois.on déclare ce nbre avant la boucle(gain en performance)
          let totalRecipes = this.recipes.length;
          for (let i = 0; i < totalRecipes; i++) {
             let recipe = this.recipes[i];
             let nom = Utils.toLawer(recipe.nom);
             let description = Utils.toLawer(recipe.description);
             if (nom.includes(searchMot) || description.includes(searchMot) || this.isIngredientsHaveMot(recipe.ingredients, searchMot)) {
                //le mot existe dans la recette donc ajouter la recette dans recipesFiltree.
                recipesFiltree.push(recipe);
             }
          }
          /**ancien algorithme
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
          */
       } else {
          //pas de filtre si le mot saisi < 3 c'est a dire rien à faire
          recipesFiltree = this.recipes;
       }
 
       /*Appliquer 2 eme filtre: Filtrer les recettes  par tags s'il y en a */
       //si au moins un tag ingredient existe(this.getIngredientTags()=tags selectionnés-tags fermés)
       if (this.ingredientObjet.getIngredientTags().length >= 0) {
          // Nouveau algorithme 2
          let totalRecipes = recipesFiltree.length;
          //tableau intermédiare qui stock uniquement les recettes qui contiennet les tags
          let resulatFiltreTags = [];
          for (let i = 0; i < totalRecipes; i++) {
             let currentRecipe = recipesFiltree[i];
             let resultatSearchTag = this.ingredientObjet.isRecipesHaseTagsIngredient(currentRecipe);
             // si la raccette ne contient pas les tags >> donc supprime cette recette 
             if (resultatSearchTag === true) {
                resulatFiltreTags.push(currentRecipe);
             }
          }
          //les recettes resultat de la recherche principale = recettes qui contiennent le tags.
          recipesFiltree = resulatFiltreTags;
 
          /** ancien traitement
          recipesFiltree = recipesFiltree.filter(currentRecipe => {
             //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
             return this.ingredientObjet.isRecipesHaseTagsIngredient(currentRecipe);
          })
          */
       }
 
       // Si la liste des "tags appareils" est sup à 0 alors rechecher les recettes qui contient les tags appareils.
       if (this.appareilObjet.getAppareilTags().length >= 0) {
          //Nouveau algorithme 2
          let totalRecipes = recipesFiltree.length;
          //tableau intermédiare qui stock uniquement les recettes qui contiennet les tags
          let resultatFiltreTags = []
          for (let i = 0; i < totalRecipes; i++) {
             let currentRecipe = recipesFiltree[i];
             let resultatSearchTag = this.appareilObjet.isRecipesHaseTagsAppareil(currentRecipe);
             if (resultatSearchTag === true) {
                resultatFiltreTags.push(currentRecipe);
             }
          }
          recipesFiltree = resultatFiltreTags;
 
          /** ancien algorithme
          recipesFiltree = recipesFiltree.filter(currentRecipe => {
             //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
             return this.appareilObjet.isRecipesHaseTagsAppareil(currentRecipe);
          })
          */
       }
       // Si la liste des "tags ustensiles" est sup à 0 alors rechecher les recettes qui contient les tags appareils.
       if (this.ustensileObjet.getUstensileTags().length >= 0) {
          //Nouveau algorithme 2
          let totalRecipes = recipesFiltree.length;
          let resultatFiltreTags = []
          for (let i = 0; i < totalRecipes; i++) {
             let currentRecipe = recipesFiltree[i];
             let resultatSearchTag = this.ustensileObjet.isRecipesHaseTagsUstensile(currentRecipe);
             if (resultatSearchTag === true) {
                resultatFiltreTags.push(currentRecipe);
             }
          }
          recipesFiltree = resultatFiltreTags;
 
          /** ancien traitement
          recipesFiltree = recipesFiltree.filter(currentRecipe => {
             //on crée et on retourne une nouvelle array "recipesFiltree"  et on ajoute la recette qui contient le tag.
             return this.ustensileObjet.isRecipesHaseTagsUstensile(currentRecipe);
          })
          */
       }
       //Fin des conditions.
 
       //Afficher les recettes triées par SearchMot.
       //this.displayRecipes(recipesFiltree);
       return recipesFiltree;
    }
 
   
 
 }


 // test https://jsben.ch/G6AYB

 const recipe = new Recipe(recipesData);
 recipe.filterRecipes('coco');