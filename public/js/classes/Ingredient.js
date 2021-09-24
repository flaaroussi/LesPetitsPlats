export default class Ingredient {


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


}