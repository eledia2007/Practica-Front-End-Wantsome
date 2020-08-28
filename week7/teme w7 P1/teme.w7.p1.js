// 1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul 
//curent este par sau impar si va raporta acest lucru in consola. (exemplu: “2 este numar par”);
// Scrieti functia in doua variante: while si for

/*
- cream o variabila care porneste de la 0 si itereaza pana la 20
- verificam daca numarul este impar. 
- daca numarul este impar merge mai departe, iar daca este par afiseaza "i este numar par"
*/
for (var i=0; i<=20; i++){
    if (i % 2 === 1){
        continue;
    } 
    console.log(i + ' este numar par');
  }
//-------------------------------------------
/* - cream o variabila care porneste de la 0
   - atat timp cat variabila este mai mica sau egala ca 20, aceasta se incrementeaza cu 2 si afiseaza numerele pare
 */
var i=0;
while (i<=20) {
 console.log(i + ' este numar par');
   i= i+2;
   
}
//---------------------------------------------------------------------------------------------------------

//2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 
//si se va afisa rezultatul. (exemplu: “3*9=27”).
// Scrieti functia in doua variante: while si for  

/* - cream o varibila care porneste de la 0 si se itereaza pana la 10
   - cream o variabila produs care este rezultatul inmultirii cu 9 
   - afisam operatia de inmultire si rezultatul.
 */
for (var i=0; i<=10; i++){
    var produs = i*9;
    console.log( i + ' * 9 = '+ produs);
  }

//----------------------------------------
 /* - cream o variabila egala cu 0
    - cream o variabila produs care o afisam (iteram) atat timp cat varibila initiala este mai mica sau egala cu 10.
 */ 
var i=0;
while (i<=10){
  var produs = i*9;
    console.log( i + ' * 9 = '+ produs);
    i++; 
}
//----------------------------------------------------------------------------------------------------------------------
// 3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
// (exemplu: 1 * 0 = 0
//  1 * 1 = 1
//  …
//  1 * 10 = 10 )
// Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.

/* - cream doua variabile care pornesc de la 0 pana la 10 si care se itereaza
   - cream inca o varibila rezultat ca produs intre variabilele create anterior si se continua calculul de atatea ori cat se itereaza fiecare variabila de la 0 la 10
*/
for (i=0; i<=10; i++){
    for (j=0; j<=10; j++)  {
      var rezultat = i*j;
       console.log(i + ' * ' + j + ' = ' + rezultat);
      continue;
    } 
  }

  //----------------------------------------------------------------------------------------------------------------
//   4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
// poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
// calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
// dezvoltate la tema anterioara ! 

function getGrade(points) {
  if(points > 10 || points < 1) 
  return "Cod necorespunzator";
  var grades = [
      {maxPoints: 3, grade: "E"},
      {maxPoints: 6, grade: "D"},
      {maxPoints: 8, grade: "B"},
      {maxPoints: 9, grade: "A"},
      {maxPoints: 10, grade: "A+"},];
  for(var i = 1; i < grades.length; i++) {
      if(points <=grades[i].maxPoints) {
        return "Calificatul corespunzator punctajului " + points +" este " + grades[i].grade;
      }
}
}
console.log(getGrade(7));