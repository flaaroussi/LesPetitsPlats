
alerte("ok")
const temperature = [2, 50, 60, -30, 20, 40,-10];


//trier le tableau des température.
let temperature1 = temperature.sort();
console.log(temperature1);

//Voici un algorithme naïf qui permet de retourner les indices d'une valeur donnée dans 
//une liste triée. Cet algorithme est dit naïf car il est très intuitif 
//mais n'est pas le plus optimisé dans ce cas.

const valeur = 20;
let i = 0 ;

while(i=0, i<= temperature1.length && temperature1[i] <= valeur){

   if( temperature1[i] === valeur ){
     console.log(i)
   }else{
      i = i + 1
   }
}


//Recherche de l'indice d'une valeur : dichotomie
const valeur = 20;
let a = 0;
let b = temperature1.length -1;
while(a<=b){
   const m = Math.floor(a+b)/2;
   if(temperature1[m]===valeur){
      alert(valeur);
      break
   }else if (temperature1[m] < valeur){
      a = m + 1 
   }else{
      b = m - 1
   }
}