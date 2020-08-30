// 1. Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

/* -Declaram o functie care accepta un string (adresa de email)
   -Cream o varibila prin care impartim stringul unde apare elementul "@"" 
   -Cream o variabila prin care selectam primul element  din care printr-o alta variabila extragem primele caratere
   -Afisam primele caractere extrase si le concatenam cu al doilea element al stringului */

var emailProtect = function (email) {
  var splitEmail = email.split('@');
  var firstPartEmail = splitEmail[0];
  var extractFirstPart = firstPartEmail.slice(0, 5);
  console.log(extractFirstPart + '.....@' + splitEmail[1]);
}
emailProtect("ovidiu.grigoras@test.com");

//--------------------------------------------------------------------------------------------------------
// 2. Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
//  de ex: myFunction("i am superman") sa printeze "I Am Superman"

/*
-declarama o functie care accepta un string ca si parametru
-impartim string in array (split)
-declaram  o variabila i ca string gol
-parcurgem array-ul creat cu 'for'
-pentru fiecare element din array, schimbam in litera mare prima litera si o concatenam cu restul elementului
-se repeta operatiunea pana se ajunge la ultimul element din array, adaugand un spatiu intre elementele concatenate.

*/
var firstUpperChar = function (myString) {
  var splitMyString = myString.split(' ');
  var i = 0;
  for (i = 0; i < splitMyString.length; i++) {
    splitMyString[i] = splitMyString[i].charAt(0).toUpperCase().concat(splitMyString[i].slice(1));

  }
  console.log(splitMyString.join(' '));
}

firstUpperChar('i am superman');


//--------------------------------------------------------------------------------------------------------
// 3. Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

var changeLetters = function (myString1) {
  var myString2 = '';
  var i = 0;
  for (i = 0; i < myString1.length; i++) {
    if (myString1[i] === myString1[i].toUpperCase()) {
      myString2 += myString1[i].toLowerCase();
    } else if (myString1[i] === myString1[i].toLowerCase()) {
      myString2 += myString1[i].toUpperCase();
    } else {
      myString2 += myString1[i];
    }
  }
  console.log(myString2);
}
changeLetters('xxXyYzZZ');

//---------------------------------------------------------------------------------------------------------
//  4. Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

var concatString = function (multiString, numar) {
  var multiString2 = '';
  while (numar >= 1) {
    multiString2 += multiString;
    numar--;
  }
  return multiString2;
}

console.log(concatString("Wantsome", 4));



//--------------------------------------------------------------------------------------------------------------
// 5. A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word
// 'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function checkPalindrom(string) {
  var reverseText = string.toLowerCase().split('').reverse().join('');
  if (string === reverseText) {
    return true;
  } else
    return false;
}
console.log(checkPalindrom('utyutui'));
//--------------------------------------------------

function palindrome(str) {
  var i = 0;
  var x = str.length - 1;
  while (i < x) {
    if (str[i] === str[x]) {
      i++;
      x--;
    } else { return false; }
  }
  return true;
}

console.log(palindrome('gdfgdfg'));



//---------------------------------------------------------------------------------------------------------------
// 6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
//var myInputArray = [[1,2 ,3], [8,9,5], [52,42,21-7],[3, 9, 52]];

function maxArray(myArr) {
  var max = 0;
  var finalArray = [];
  for (var i = 0; i < myArr.length; i++) {
    var x = myArr[i];
    for (var j = 0; j < x.length; j++) {
      if (max < x[j]) {
        max = x[j];
      }
      finalArray[i] = max;
    }
  }
  return finalArray;
}

console.log(maxArray([[1, 2, 3], [8, 9, 5], [52, 42, 21 - 7], [3, 9, 52]]));
console.log(maxArray([[4, 5, 1], [13, 27, 18],]));

//---------------------------------------------------------------------------------------------------------------
// 7. Implementati o functie care face reverse la un string

function reverseString(string) {
  var reversedText = string.toLowerCase().split('').reverse().join('');
  console.log(reversedText);
}
reverseString('utyutui');


//-----------------------------------------------------------------------------------------------------------------
// 8. Implementati o functie care calculeaza factorialul unui numar
//factorial(3)// 6 (1*2*3)
//n! = 1 * 2 *3*4.....* n-1 * n

/*
declaram o variabila nr 
cream o functie factorial 
declaram o variabila rezultat care porneste de la 1
facem un for i=1 , i<=1, i++
rezultat = rezultat*i
afisam rezultat
apelam functia cu variabila nr
*/
function factorial(nr) {
  rezultat = 1;
  for (i = 1; i <= nr; i++) {
    rezultat = rezultat * i;
  }
  console.log(rezultat);
}

factorial(3);

//hint alta varianta: js recursiv function

function factorial1(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else
    return n * factorial1(n - 1);
}

console.log(factorial1(3));


//-------------------------------------------------------------------------------------------------------------------
// 9. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel 
//din urma.

function checkString(str1, str2) {
  var extractStr2 = str1.substr(str1.length - str2.length, str2.length)
  if (extractStr2 === str2) {
    return true;
  } else return false;
}
console.log(checkString('ana are mere', 'are mere'))

//-------------------------------------------------------------------------------------------------------------------
// 10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul
// element din array care trece testul specificat

function myFunction(arr, testFunction) {
  for (var i = 0; i < arr.length; i++)
    if (testFunction(arr[i])) {
      return arr[i];
    }
}

function testFunction(nr) {
  return nr % 2 === 0;
}

console.log(myFunction([1, 2, 3, 4], testFunction));//output: 2

//--------------------------------------------------------------------------------------------------------------------
// 11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele
// celui de-al doilea string

function checkLetters(str1, str2) {
  var str1Checked = "";
  for (i = 0; i < str2.length; i++) {
    str1Checked = str1.replace(str2[i], '');
    if (str1Checked === str1) {
      return false;
    } else
      return true;
  }
}
console.log(checkLetters('abcd', 'ef'));
console.log(checkLetters('abcde', 'cba'));



//------------------------------------------------------------------------------------------------------------------
// 12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
// element al array-ului pana cand intalneste elementul cu valoarea specificata
//myFunction([1,2,3,4],3)//output: 1
//output 2


function myFunction(array, val) {
  var indexOfVal = array.indexOf(val);
  for (var i = 0; i < indexOfVal; i++) {
    console.log(array[i]);
    continue;
  }
}
myFunction([1, 2, 3, 4, 5, 6, 7], 3);


//-----------------------------------------------------------------------------------------------------------------                        
// 13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

function deleteFalseFromArray (arr) {
  var falseElements;
  var restArray = [];
  for (i = 0; i < arr.length; i++) {
      falseElements =  Boolean(arr[i]);
      if (falseElements === true) {
      restArray.push(arr[i]);
      }
  }
  return restArray;
}
console.log(deleteFalseFromArray('','123', NaN, null, 'abc'));


//------------------------------------------------------------------------------------------------------------------
// 14. Scrieti o functie care repeta un string de n ori specificate

var repeatString = function (multiString, n) {
  var multiString2 = '';
  while (n >= 1) {
    multiString2 += multiString + ' ';
    n--;
  }
  console.log(multiString2);
}
repeatString("Hello!", 4);