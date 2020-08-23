//  1. Scrieti o functie de tip named function denumita greatestNrBetween care:
//- Primeste ca argumente doua numere
//- Returneaza numarul care este mai mare
//Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatestNumbersBetween(a, b) {
    if (a > b) {
        console.log('Numarul mai mare dintre ' + a + ' si ' + b + ' este' + a);
        return a;
                } else if (a === b) {
        console.log('Numerele sunt egale');
    } else
        console.log('Numarul mai mare dintre ' + a + ' si ' + b + ' este' + b);
    return b;
}

greatestNumbersBetween(5, 10);
greatestNumbersBetween(5, 5);//arata 5 pentru ca prima conditie nu este indeplinita si arata b
greatestNumbersBetween(-19, 304);
greatestNumbersBetween(900, 2);

//----------------------------------------------------------------------------------------
//2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
//- Primeste ca argument codul unei limbi: “en”, “es”, “de”
//- Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
//- Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
//Apelati functia pentru fiecare caz in parte.

var helloWorldLAng = function (lang){
    switch(lang){
        case 'en': {
            console.log('Hello World');
        }
        break;
        case 'es': {
            console.log('Hola mundo');
        }
        break;
        case 'de': {
            console.log('Hallo Welt');
        } 
        break;

        default: console.log('Hello World');
    }
  }
  helloWorldLAng('en');
  helloWorldLAng('es');
  helloWorldLAng('de');
  helloWorldLAng('ro'); //afiseaza valoare default

  //----------------------------------------------------------------------------------------
  //3. Scrieti o functie numita pluralizeWord care:
//- accepta doua argumente: un substantiv in engleza si un numar
//- returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
//- adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 

 var pluralizeWord = function (englSubst, number) {
        if (typeof englSubst === 'string' && number > 1) {
            console.log(number + " " + englSubst + 's');
            return number + " " + englSubst + 's';
        }
        else (typeof englSubst === 'string' && number === 1) 
            console.log(number + " " + englSubst);
            return number + " " + englSubst;         
}
pluralizeWord ('map', 2);

//----------------------------------------------------------------------------------------------------
//4. Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
//corespunzatoare considerand urmatoarele criterii:
//- daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
//- daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
//- pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
//Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y”

function calcTax (IncomeInput) {

    if (IncomeInput< 30000) {  
         console.log('Pentru un venit anual de '+ '$' + IncomeInput + ', aveti de platit taxe in valoare de 0% .');
        
    }
    else if (IncomeInput<99999 && IncomeInput>50000)
    {
        console.log('Pentru un venit anual de '+ '$' + IncomeInput + ', aveti de platit taxe in valoare de 35% .');
    }
    else
    {
        console.log('Pentru un venit anual de '+ '$' + IncomeInput + ', aveti de platit taxe in valoare de 40% .');
    }
}
calcTax(20000);

//--------------------------------------------------------------------------------------------------------
//5. Scrieti in doua variante o functie care accepta ca argument o valoare numerica pentru un parametru numit points si
//afiseaza:
//- AA if points is greater than 90
//- AB if points is greater than 80 and less than or equal to 90
//- BB if points is greater than 70 and less than or equal to 80
//- BC if points is greater than 60 and less than or equal to 70
//- CC if points is greater than 50 and less than or equal to 60
//- CD if points is greater than 40 and less than or equal to 50
//- DD if points is greater than 30 and less than or equal to 40
//- FF if points is less than or equal to 30

var testPoints = function (points){
    
        if (90<points) {
            console.log('AA if points is greater than 90');
        } else if
              (80<points && points<=90) {
             console.log('AB if points is greater than 80 and less than or equal to 90');
        } else if
              (70<points && points<=80) {
            console.log('BB if points is greater than 70 and less than or equal to 80');
        } else if
              (50<points && points<=60) {
            console.log('CC if points is greater than 50 and less than or equal to 60');
        } else if 
              (40<points && points<=50) {
              console.log('CD if points is greater than 40 and less than or equal to 50');
        } else if
            (30<points && points<= 40) {
            console.log('DD if points is greater than 30 and less than or equal to 40');
        } else if
             (points < 30) {
             console.log('FF if points is less than or equal to 30');
        } else
             console.log('You failed the test!');
  }

  testPoints(20);
  
    //--------------------------------------------------------------------------------------
 // 6. Scrieti o functie care testeaza daca o anumita data introdusa este in weekend:
//Test Data :
//console.log(is_weekend('Nov 15, 2014'));
//console.log(is_weekend('Nov 16, 2014'));
//console.log(is_weekend('Nov 17, 2014'));
//Output :
//"weekend"
//"weekend"
//undefined

 var is_weekend =  function(dateDay){
        var newDate = new Date(dateDay);
         
        if(newDate.getDay() == 6 || newDate.getDay() == 0)
           {return "weekend";} 
    }
    
    console.log(is_weekend('Nov 15, 2014'));
    console.log(is_weekend('Nov 16, 2014'));
    console.log(is_weekend('Nov 17, 2014'));