
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi 
//imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function myFunction(a, b) {
    if (a != b) {
        return (a + b);
    } else { return (a + b) * 5; }

}

console.log(myFunction(5, 3));
console.log(myFunction(5, 5));


/*//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false*/

function testNumbers(nr1, nr2) {
    const i = 30;
    let sum = nr1 + nr2;
    if (nr1 === i && nr2 === i || sum === 30) {
        return true;
    } else {
        return false;
    }
}
console.log(testNumbers(30, 30)); //- true 
console.log(testNumbers(15, 15)); //- true
console.log(testNumbers(10, 15)); //- false

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe 
//sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(myString) {
    const string2 = "JS";
    let firstLetters = myString.slice(0, string2.length);
    if (firstLetters != string2) {
        return string2 + myString;
    } else if (firstLetters === string2) {
        return myString;
    }
    else {
        return string2;
    }
}
console.log(checkString('JSisAwsome')); //- JSisAwsome
console.log(checkString('isEasy')); //- JSisEasy
console.log(checkString(null)); //- JS ???????????


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(string) {
    let stringToArray = string.split("");
      for (let i = 0; i < stringToArray.length; i++) {
        for (let j = i + 1; j < stringToArray.length; j++)
          if (stringToArray[i] === stringToArray[j]) {
            stringToArray.splice(j, 1);
          }
      }
      return stringToArray.join("");
    }
    console.log(removeDuplicates('123123'));



//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function longestWordFromString(string) {
    let strToArray = string.split(" ");
    let longestFromArray = 0;
    let longestWord;
    for (var i = 0; i < strToArray.length; i++) {
        if (longestFromArray < strToArray[i].length) {
            longestFromArray = strToArray[i].length;
            longestWord = strToArray[i];
        }
    }
    return longestWord;
}
console.log(longestWordFromString('Wantsome is Awsomeeee today'));



//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
function repeatString (multiString) {
    let multiString2 = '';
    const n = 5;
    for (let i = 1; i<=n; i++) {
      multiString2 += multiString;
      console.log(multiString2);
    }
  }
  repeatString("*");
  
//ex7
//const negativeNumbers = [];

//function extractNegativeNumbers(numbers) {
// append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above

//}
//extractNegativeNumbers([1,2,-5,4,-6])

function extractNegativeNumbers(numbers) {

    let negativeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    return negativeNumbers;

}
console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));



//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator 
//- "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate(number1, number2, operator) {
    if (operator === 'add') {
        return suma();
    } else if (operator === 'multiply') {
        return inmultire();
    } else if (operator === 'substract') {
        return scadere();
    } else if (operator === 'divide') {
        return impartire();
    }

    function suma() {
        return (number1 + number2);
    }
    function impartire() {
        return (number1 / number2);
    }
    function inmultire() {
        return (number1 * number2);
    }
    function scadere() {
        return (number1 - number2);
    }
}
console.log(calculate(2, 3, 'divide'));


//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze 
//"THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7;/

function dividedNumber (number){
    if (dividedBy3() && dividedBy5()){
          return 'BOTH';
    } else if (dividedBy5()){
          return 'FIVE';
    } else if (dividedBy3()){
           return 'THREE';
    } else return number;  
  
  
  function dividedBy3 (){
    return (number % 3 === 0) ;
  }
  function dividedBy5 (){
    return (number % 5 === 0);
  }
  
}
console.log(dividedNumber(20));