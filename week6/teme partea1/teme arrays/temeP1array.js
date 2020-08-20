//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

var weekDays = ['luni', 'marti', 'miercuri', 'joi','vineri'];
var myLenght = weekDays.length;

console.log(myLenght);


//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur

var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];

var array3 = array1.concat(array2);
console.log(array3);


//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()

var fructe = ['clementine', 'mango'];
var name = 'MAria';

console.log(Array.isArray(fructe));
console.log(Array.isArray(fructe));


//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala

var numbers = ['one', 'two', 'three', 'four', 'five'];

console.log(numbers.join(' and ' ));


//Ex5: Adaugati 2 elemente noi in arrayul de mai jos

var cars = ['Tesla', 'Dacia'];
cars.push ('Toyota');
cars.unshift('Hyundai');

console.log(cars);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.

cars.pop();
console.log(cars);


//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

cars.unshift('Dodge');
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

cars.reverse();
console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

cars.splice(1, 2, 'BMW', 'Renault');
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic

var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function (a,b){
    return a-b;
});
console.log(arrayNumbers);

arrayNumbers.sort(function (a,b){
    return b-a;
});
console.log(arrayNumbers);

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat

var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]
fruitsArray.sort( function (a, b){
    if (a < b) {return -1} ;
    if (a > b) {return 1} ;
    return 0;
});
console.log(fruitsArray);
