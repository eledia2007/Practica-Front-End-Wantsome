//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
function sumNumbersTo (toNumber){
    let finalSum = 0;
    for (let i=0 ; i<=toNumber; i++){
      finalSum += i;
    }
    return finalSum;
  }
  console.log(sumNumbersTo('4'));

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
function findLongestWord(string) {
    let stringSplit = string.split(' ');
    let longestWord = '';
    for(let i = 0; i < stringSplit.length; i++){
      if(stringSplit[i].length > longestWord.length){
      longestWord = stringSplit[i];
       }
    }
    return longestWord;
  }
  console.log(findLongestWord("I say abracadabra"));
/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
  function reverseString (stringToReverse){
      let reversedString = stringToReverse.split('').reverse().join('');
      return reversedString;
  }
  console.log(reverseString('portocala'));
/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
function transform(text) {
  var splitText = text.split('');
  for (var i = 0; i < splitText.length; i++) {
      if (splitText[i]=== 'z'){
        splitText[i]= 'a';
      } else if (splitText[i]=== 'Z'){
        splitText[i]= 'A';
      } else 
         splitText[i] = String.fromCharCode(splitText[i].charCodeAt(0)+1);/*?????????*/
     
  }
  return splitText.join('');
}
console.log(transform('abcz'));
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
function convertToHoursAndMinutes (number) {
    let minutes = number % 60;
    let hours = (number-minutes)/60;
    return hours + ':' + minutes; 
  }
  
  console.log(convertToHoursAndMinutes('130'));
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
function sortString(str){
let newString = str.split('').sort().join('');
return newString;
}
console.log(sortString('fbact'));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul 
sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
function checkString (string){
    const operator = '+';
    let splitString = string.split('');
    for (let i=0 ; i<=string.length; i++){
    if (splitString[i] === operator && splitString[i+2] === operator) {
        return true;
        } else return  false;
  }
        }
   console.log(checkString('+a+b+c+'));
  console.log(checkString('+ab+c+d+'));