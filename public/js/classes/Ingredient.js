
import Utils from "../utils/Utils.js";

export default class Ingredient {

   constructor() {
      //Créer un array pour stocker la liste des ingrédients des recettes filtrées
      this.ingredients = [];
   }

   /**
   * Afficher les ingrédients dans les blocs de la recherche avancée.
   */
   doDisplayIngredient() {
      let motSaisi = document.querySelector('.recherche-ingredient').value;
      //On trier la liste des ingrédients par ordre alphabétique
      this.ingredients.sort();
      this.ingredients.forEach(currentIngredient => {
         //si le mot saisi =0 ou la liste des ingredients contient le mot saisi dans les blocs de la recherche avancée.
         if (!motSaisi || Utils.toLawer(currentIngredient).includes(Utils.toLawer(motSaisi))) {
            //alors ajouter l'ingredient dans la liste des ingredients.
            this.doAddIngredient(currentIngredient);
         }
      })
   }
   /**
   *ajouter l'ingredient dans la liste des ingredients/attaché un click à l'ingrédient/ajouté l'ingredient cliqué sous forme de tag.
   * @param {string} ingredient 
   */
   doAddIngredient(ingredient) {
      //créer la structure HTML pour un ingredient
      let elt = document.querySelector(".bloc-search-resultat--ingredient");
      let li = Utils.creatEltHtml("li", "search-ingredient");
      li.title = "Cliquer içi pour rechercher par ce mot"
      li.innerHTML = ingredient;
      elt.appendChild(li);
      //Attacher "click" à l'ingrédient.
      li.addEventListener("click", event => {
         //Affiche l' ingrédient cliqué sous forme de tag. 
         this.doAddFiltreTags(li, 'ingredient');
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
      //On récupère la liste des tags.
      let tagsListe = this.getIngredientTags();
      //On garde les tags qui respecte la condition currentTag.textContent) == Utils.toLawer(li.textContent)on appliquant un filtre sur tagsListe(span).
      tagsListe = tagsListe.filter(currentTag => Utils.toLawer(currentTag.textContent) == Utils.toLawer(li.textContent));
      //si le tag existe dans l'array des tags.
      if (tagsListe.length > 0) {
         //rien à faire
         return true
         //si non ajout du tag dans la liste des tags
      } else {
         //on crée la structure HTML de la liste des tags
         let tag = Utils.creatEltHtml("div", "tag " + filtre);
         tag.innerHTML = `<span class="tag-libelle">${li.textContent}</span><i class="far fa-times-circle" title="Supprimer"></i>`;
         sectionTag.appendChild(tag);
         this.doCloseTag(tag);
         //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
         Utils.doRelanceRecherche();
      }
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
    * @param {*} recipe :La recette filtrée (currentRecipe dans la classe Recette)resultat de la recherche principale. 
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