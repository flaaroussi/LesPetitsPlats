//quand on crée une <div> pour afficher une recette, on lui ajoute un attribut:
//id="recette_{id}". par exemple, id="recette_1", id="recette_2", etc.


// quand on ajoute ou enlève un ingrédient, un ustensile ou un appareil,
// on remet toutes les recettes en visible, puis on applique les tags.

function modificationTags()
{
  // remettre toutes les <div> des recettes en visible 
  recipes.forEach(recette =>{
    document.getElementById("recette_" + recette.id).style.display = "block";
  });

  // applique les tags ingrédients
  filtrerParIngredients();

  // applique les tags appareils
  filtrerParAppareils();

  // applique les tags ustensiles
  filtrerParUstensiles();
}

function filtrerParIngredients(){
   // une array des tags de type ingrédient
   // pour chaque tag, cacher les recettes qui ne contiennent pas cet ingrédient
  let tags = [...]; 
  
  tags.forEach(tag => {

   // un boucle sur toutes les recettes
   recipes.forEach(recette => {
      // si la recette ne contient pas le tag dans ses ingédients,
      if(!recette.ingredients.some((element) => element.ingredient==tag)){
        document.getElementById("recette_" + recette.id).style.display = "none";
      }
    }); // end of recipes

  }); // end of tags

}

function filtrerParAppareils(){
  let tags = [...]; // une array des tags de type appareil
  // pour chaque tag, cacher les recettes qui ne contiennent pas cet appareil
  tags.forEach(tag => 
  {

   // un boucle sur toutes les recettes
   recipes.forEach(recette => 
    {
      // si la recette ne contient pas le tag dans son appareil,
      if(recette.appliance!=tag)
      {
        document.getElementById("recette_" + recette.id).style.display = "none";
      }
    }); // end of recipes

  }); // end of tags
}

function filtrerParUstensiles()
{
  let tags = [...]; // une array des tags de type ustensile
  // pour chaque tag, cacher les recettes qui ne contiennent pas cet ustensile
  tags.forEach(tag => 
  {

   // un boucle sur toutes les recettes
   recipes.forEach(recette => 
    {
      // si la recette ne contient pas le tag dans ses ustensiles,
      if(!recette.ustensils.some((ustensil) => ustensil==tag))
      {
        document.getElementById("recette_" + recette.id).style.display = "none";
      }
    }); // end of recipes

  }); // end of tags
}
