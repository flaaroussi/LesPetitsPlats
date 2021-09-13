export default class Utils {


   static toLawer(texte){
      if(texte){
         return texte.toLowerCase();
      }else{
         return  "";
      }
      
   }

   static multiligneEllipsis(elt){
      let text = elt.value
      while(elt.scrollHeight > elt.offsetHeight){
         text = text.substr(0, text.length-1);
      }
      elt.innerHTML = text + '...';
   }
   
}