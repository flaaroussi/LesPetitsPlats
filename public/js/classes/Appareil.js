import Utils from "../utils/Utils.js";

export default class Appareil {

   constructor() {
      //creer un array à partir de la liste des appareils des recettes filtrées
      this.appareils = [];
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
    * Selectionner un appareil et l'ajouter dans la liste des appareils.
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
    * Afficher les appareils(resultat recherche barre principale) dans les blocs de recherche avancée.
    * @param {*} appareil 
    * @returns 
    */
   doDisplayAppareil(appareil) {
      //si l'appareil existe dans le js 
      if (appareil) {
         let motSaisi = document.querySelector('.recherche-appareil').value;
         if(!motSaisi || Utils.toLawer(appareil).includes(Utils.toLawer(motSaisi))){
            //donc if ::::::::::::::::::::
            if (this.appareils.includes(appareil)){
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
      //On garde les tags qui respecte la condition :applique un filtre sur tagsListe(span) et 
      tagsListe = tagsListe.filter(currentTag => Utils.toLawer(currentTag.textContent) == Utils.toLawer(li.textContent));
      //si li.textContent =elt selectionné est egal a currentTag.textContent=tag ;;;;;;;;;;;;;;;;;;;;;;;
      //si le tag existe dans l'array des tags(array retourné par la fonction )
      if (tagsListe.length > 0) {
         //rien à faire
         return true
         //si non ajout du tag dans la liste des tags
      } else {
         //on crée la structure HTML de la liste des tags
         let tag = Utils.creatEltHtml("div", "tag " + filtre);
         tag.innerHTML = `<span>${li.textContent}</span><i class="far fa-times-circle"></i>`;
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