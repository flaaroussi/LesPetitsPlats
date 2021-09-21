export default class Utils {


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
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

   
  
}